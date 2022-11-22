# Turborepo, SvelteKit, Wundergraph, and more

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
3. Check node version matches `package.json` with `node -v`
   - If this is not working, try restarting your terminal instance
4. Install packages `npm install`
5. Configure env vars
   - Copy `/example.db.env` to `/db.env`
   - Copy `/packages/db/example.env` to `/packages/db/.env`
6. Launch local Postgres database `npm run db:up`
7. Run project `npm run dev`
