# Turborepo, SvelteKit, Wundergraph, and more!

Forked from the [official Svelte starter with Turborepo](https://vercel.com/templates/svelte/turborepo-sveltekit-starter).

This is a boilerplate that aims to help you get all the following technologies working together nicely.

- [TurboRepo](https://turborepo.org/)
- [Wundergraph](https://wundergraph.com/)
- [Postgres](https://www.postgresql.org/)
- [SvelteKit](https://kit.svelte.dev)
- [TailwindCSS](https://tailwindcss.com/)

## Getting started locally

1. Install [Docker Desktop](https://docs.docker.com/compose/install)
2. Install [Volta](https://volta.sh/)
3. Install packages `npm install`
4. Configure env vars (coming soon)
   - Copy `/example.db.env` to `/db.env`
   - Copy `/packages/db/example.env` to `/packages/db/.env`
5. Launch local Postgres database `npm run db:up` (coming soon)
6. Run project `npm run dev`
