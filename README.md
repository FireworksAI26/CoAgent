# CoAgent MVP

CoAgent is an AI employee team platform for founders. This MVP demonstrates role-based agents, workflows, runs, approvals, tools, and company memory in a polished dark command-center interface.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Prisma ORM + SQLite (default for demo)/PostgreSQL (production)
- Mock AI execution + mock integrations
- Zero-config local DB via SQLite for fast demos

## Setup
```bash
npm install
cp .env.example .env
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```

`DATABASE_URL` is required by Prisma. For the local demo, `.env.example` points to SQLite at `file:./dev.db`.

## Database Commands
```bash
npm run db:generate
npm run db:push
npm run db:seed
# Equivalent Prisma-native seed command now also works:
npx prisma db seed
```

## Demo Workflow: Sponsor Outreach Campaign
1. Open Dashboard or Workflows.
2. Run **Sponsor Outreach Campaign**.
3. A new run is created with staged logs.
4. Human approval is added before email send.
5. Review in Runs + Approvals.

## What's mocked
- AI reasoning and delegation engine.
- Tool connector auth and external API calls.
- Real-time streaming and queue workers.

## Next steps
- Add NextAuth and workspace RBAC.
- Replace mocked run executor with queue workers (BullMQ/Temporal).
- Connect OpenAI + tool adapters (Gmail, GitHub, Notion, Slack).
- Add vector memory + retrieval + audit logs.
