# Bedstack (Stripped)

⚡ Stripped version of [Bedstack](https://github.com/bedtime-coders/bedstack) for rapid prototyping.

## Bedstack

Bedstack is a collection of bleeding-edge technologies to build modern web applications.

Including:

- [Bun](https://bun.sh) - Runtime, package manager
- [ElysiaJS](https://elysiajs.com) - HTTP Framework
- [Drizzle](https://orm.drizzle.team) - ORM, Migrations, Seeding
- [Biome](https://biomejs.dev) - Linter, Formatter

## Development

1. Install dependencies

   ```bash
   bun install
   ```

2. Copy `.env.example` to `.env` and fill in the values

   ```bash
   cp .env.example .env
   ```

3. Push the database schema to the database

   ```bash
   bun db:push
   ```

4. Start the server

   ```bash
   bun dev
   ```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more information, including how to set up your development environment.
