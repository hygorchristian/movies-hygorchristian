import type { z } from 'zod';
import type { clientSchema, serverSchema } from './schema.mjs';
import { env } from './server.mjs';

export type Env = z.infer<typeof serverSchema> & z.infer<typeof clientSchema>;

export default { ...env } as Env;
