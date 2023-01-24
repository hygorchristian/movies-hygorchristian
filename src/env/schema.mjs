// @ts-check
import { z } from 'zod';

const minStr = 5;
/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  TMDB_TOKEN: z.string().min(minStr),
  TMDB_API_KEY: z.string().min(minStr),
  TMDB_ACCOUNT_ID: z.string().min(minStr)
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({});
