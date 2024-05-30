import dotenv from 'dotenv';
import { cleanEnv, port, str, testOnly } from 'envalid';

dotenv.config();

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production','test'] }),
  PORT: port({ default: testOnly(3000) }),
  GOOGLE_APPLICATION_CREDENTIALS: str(),
}, )