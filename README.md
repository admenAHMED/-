# Travel Marketplace + ERP Monorepo

This repository contains a starter monorepo for a travel marketplace and ERP platform, aligned to the architecture and product model described in the specification.

## Included

- `apps/web` — customer portal (Next.js)
- `apps/admin` — operations dashboard (Next.js)
- `apps/api` — NestJS backend
- `packages/ui` — shared UI components
- `packages/types` — domain DTOs and enums
- `packages/config` — environment and validation config
- `packages/utils` — shared helper functions
- `apps/api/prisma` — Prisma schema for modular domains

## Getting started

```bash
npm install
npm run dev
```

## Workspace scripts

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

## Notes

The repo is intentionally scaffolded as a modular monorepo to separate booking, finance, ERP, and integrations without mixing business domains.
