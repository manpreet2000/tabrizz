import { env } from "./config";
import { StatusCodes } from 'http-status-codes';
import { app } from "./server";

console.log(env.GOOGLE_APPLICATION_CREDENTIALS);

app.listen(env.PORT, () => {
    const { NODE_ENV, PORT } = env;
    console.log(`Server (${NODE_ENV}) running on port ${PORT}`);
  });