# Travel Marketplace + ERP Monorepo

This repository contains a starter monorepo for a travel marketplace and ERP platform aligned to the product specification.

## Included

- `apps/web` — customer portal (Next.js)
- `apps/admin` — operations dashboard (Next.js)
- `apps/api` — NestJS backend
- `packages/ui` — shared UI components
- `packages/types` — domain DTOs and enums
- `packages/config` — environment and validation config
- `packages/utils` — shared helpers
- `apps/api/prisma` — Prisma schema for modules such as auth, users, customers, providers, services, orders, payments, finance, audit, and integrations

## Getting started

```bash
npm install
npm run dev
```

## Useful workspace commands

```bash
npm run dev --workspace @travel/api
npm run dev --workspace @travel/web
npm run dev --workspace @travel/admin
npm run prisma:generate --workspace @travel/api
npm run prisma:migrate --workspace @travel/api
```

## Stack

- Node.js 20+
- TypeScript
- NestJS
- Prisma
- PostgreSQL
- Next.js 14
- React

## Design intent

This monorepo keeps booking, fulfillment, finance, and ERP concerns separated into modular domains instead of building a single large application.
