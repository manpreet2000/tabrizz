import express, {Express} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimiter from './middleware/rateLimit';
import session from 'express-session';
import { firebaseAuth } from './middleware/firebase';
import { scriptRouter } from './api/script/scriptRouter';
import { userRouter } from './api/user/userRouter';

const app:Express = express();

app.use(
    session({
      secret: 'your_secret_key', // Replace with a strong secret
      resave: false,
      saveUninitialized: false,
    })
  );
  
app.set('trust proxy', true); // Trust all proxies

app.use(cors()); 
app.use(helmet(
  {crossOriginResourcePolicy: false,}
));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use(rateLimiter);

app.use(firebaseAuth);

app.use('/script.js',scriptRouter);
app.use('/users',userRouter);

export {app}