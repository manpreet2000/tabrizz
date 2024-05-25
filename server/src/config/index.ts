import dotenv from 'dotenv';
import { cleanEnv, host, port, str, testOnly } from 'envalid';

dotenv.config();

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production','test'] }),
  HOST: host({ default: testOnly('localhost') }),
PORT: port({ default: testOnly(3000) }),
}, )