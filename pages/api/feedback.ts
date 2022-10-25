import { postmark } from 'lib/postmark';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    const schema = z.object({
      message: z
        .string({
          required_error: 'Message is required',
        })
        .trim()
        .min(8, 'Must be 8 or more characters long'),
      email: z
        .string({
          required_error: 'Email is required',
        })
        .email('Not a valid email'),
    });

    const validation = schema.safeParse(req.body);

    if (!validation.success) {
      return res.status(422).json({ message: validation.error.issues });
    }

    const { email, message } = req.body;

    if (!email) {
      return res.status(422).json({ message: 'Invalid email address' });
    }

    if (!message || message.trim().length < 8) {
      return res.status(400).json({ message: 'Message too short' });
    }

    await postmark.sendEmail({
      From: 'hey@mahmoud.codes',
      To: 'hey@mahmoud.codes',
      Subject: 'New feedback!',
      TextBody: message,
      MessageStream: 'outbound',
    });

    res.status(201).json({ message: 'Feedback sent' });
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong: ${error}` });
  }
};

export default handler;
