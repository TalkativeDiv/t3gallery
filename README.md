# T3 based Gallery

> A simple image gallery (like imgur, google images, etc.) built with NextJS, Uploadthing, Clerk, Drizzle, Postgres, Upstash, and Shadcn UI.

## Features

- ⚡ Fast and Simple CRUD functionality on images with uploads using Uploadthing, Drizzle, and Postgres.
- 📉 Stop spam with rate limiting using Upstash.
- 🔒 Secure and Beautiful authentication flow with Clerk, `clerk/elements` package, and Shadcn UI.
- 🌈 Beautiful UI with Shadcn UI and TailwindCSS.
- 🚀 Deployed with Vercel at no cost.

## Deployment

1. Fork this repo
2. Create an Upstash Database, a Clerk app,an Uploadthing app, and a Vercel Postgres db. Save all of their credentials.
3. Deploy to your deployment provider of choice (Vercel is the easiest since you already have the db there) and in the enviorment variables tab set following enviorment variables:

```env
# Database
POSTGRES_URL=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL_NO_SSL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_USER=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE=""
# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
# Uploading
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
# Ratelimiting
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
```

<details>
  <summary>TODO</summary>

- [x] Make it deploy
- [x] Scaffold basic ui with mock data
- [x] Tidy up build process
- [x] Actually set up a database
- [x] Attach database to UI
- [x] Add auth (clerk)
- [x] Add image uploading
- [x] "taint" (server-only)
- [x] Use Next/Image Component
- [x] Error mangagement (sentry)
- [x] Routing + Image Page (Parallel route)
- [x] Delete button (w/ Server Actions)
- [x] Ratelimiting (upstash)

</details>
