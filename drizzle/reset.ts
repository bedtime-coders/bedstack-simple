import * as articlesSchema from "@/articles/articles.schema";
import { env } from "@/core/env";
import * as profilesSchema from "@/profiles/profiles.schema";
import * as tagsSchema from "@/tags/tags.schema";
import * as usersSchema from "@/users/users.schema";
import chalk from "chalk";
import { drizzle } from "drizzle-orm/bun-sql";
import { reset } from "drizzle-seed";

const schema = {
	...usersSchema,
	...profilesSchema,
	...tagsSchema,
	...articlesSchema,
};

console.log(chalk.gray("Resetting database"));
// See: https://github.com/drizzle-team/drizzle-orm/issues/3599
await reset(drizzle(env.DATABASE_URL), schema);
console.log(`[${chalk.green("✓")}] Database reset complete`);
