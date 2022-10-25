# Feedback Widget


![GitHub cover image](https://user-images.githubusercontent.com/27310414/197848724-a8aeba41-8e90-45da-a405-f1ddfbdc21b5.png)


This project is built using the following technologies:
- [Next.js](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Postmark](https://postmarkapp.com/)
- [Zod](https://github.com/colinhacks/zod)
- [React Hook Form](https://react-hook-form.com/)
- [React Query](https://react-query.tanstack.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Upstash Rate Limit](https://github.com/upstash/ratelimit)


## Code overview

-- WIP --

## Getting Started

1. Clone the repo by running the following command in your terminal:

```bash
git clone https://github.com/m-abdelwahab/feedback-widget.git
```

2. Navigate to the directory where you cloned the project and install the dependencies by running the following command:

```bash
npm install
#or
yarn install
```

3. Rename the `.env.example` file in the root directory to `.env.local`

You're going to need to create a [Postmark](https://postmarkapp.com/) account and get your server token. Then, you can replace the `POSTMARK_API_KEY` value in the `.env.local` file with your server token.


To set up rate limiting, you'll need to create an account on [Upstash](https://upstash.com/) and provision a new Redis instance. Then, you can replace the `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` values in the `.env.local` file with your API key.


4. Start the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
