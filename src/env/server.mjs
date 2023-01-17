/**
 * This file is included in `/next.config.mjs` which ensures the app isn't built with invalid env vars.
 * It has to be a `.mjs`-file to be imported there.
 */
import { env as clientEnv, formatErrors } from './client.mjs';
import { serverSchema } from './schema.mjs';

/**
 * You can't destruct `process.env` as a regular object, so we do
 * a workaround. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [key: string]: string | undefined; }}
 */
const serverEnv = serverSchema.safeParse(
  Object.keys(serverSchema.shape).reduce((env, key) => {
    env[key] = process.env[key];
    return env;
  }, {})
);

if (!serverEnv.success) {
  console.error(
    '❌ Invalid environment variables:\n',
    ...formatErrors(serverEnv.error.format())
  );
  throw new Error('Invalid environment variables');
}

for (let key of Object.keys(serverEnv.data)) {
  if (key.startsWith('NEXT_PUBLIC_')) {
    console.warn('❌ You are exposing a server-side env-variable:', key);

    throw new Error('You are exposing a server-side env-variable');
  }
}

export const env = { ...serverEnv.data, ...clientEnv };
