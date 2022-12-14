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

    await postmark.sendEmail({
      From: process.env.EMAIL_FROM as string, // update this value with a verified email on Postmark
      To: email,
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
