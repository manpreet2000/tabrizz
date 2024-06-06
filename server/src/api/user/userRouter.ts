import { Router } from 'express';
import { z } from 'zod';
import { userServices } from './userService';
import { StatusCodes } from 'http-status-codes';
import { IGetUserAuthInfoRequest } from '@/utils/interfaces';
import { env } from '../../config';

export const userRouter: Router = (() => {
  const router = Router();

  router.post('/add-data', async (req, res) => {
    try {
      const user = (req as IGetUserAuthInfoRequest).user;
      if (!user) {
        console.log('User not found');
        return res.status(StatusCodes.UNAUTHORIZED).send('User not found');
      }
      // Define the schema for request body validation
      const schema = z.object({
        emojis: z.array(z.string()).refine((val) => val.length > 0, 'emojis must have at least one emoji'),
        intervalTime: z.number().refine((val) => val > 0, 'intervalTime must be greater than 0'),
      });

      // Validate the request body
      const { emojis, intervalTime } = schema.parse(req.body);
      console.log({ emojis, intervalTime, userId: user.uid });

      await userServices.addUserData({ emojis, intervalTime, userId: user.uid, email: user.email });
      console.log(env.NODE_ENV);
      
      const url = (env.NODE_ENV === 'development' || env.NODE_ENV === 'test') ? 'http://localhost:3000/script.js' : 'https://backend.tabrizz.com/script.js'; //todo: update domain
      const script = `<script defer src=${url} data-id=${user.uid}></script>`;
  
      res.status(StatusCodes.OK).send(script);
      // Your code here...
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Internal Server Error');
    }
  });

  router.get('/get-data/:id', async (req, res) => {
    try {
      console.log(`Inside get-data route`);

      const user = (req as IGetUserAuthInfoRequest).user;
      if (!user) {
        console.log('User not found');
        return res.status(StatusCodes.UNAUTHORIZED).send('User not found');
      }
      
      const schema = z.string();
      // Validate the request params
      const id = schema.parse(req.params.id);

      console.log(`params: ${JSON.stringify(req.params)}`);

      const data = await userServices.getUserData(id);
      console.log(`Data: ${JSON.stringify(data)}`);

      res.status(StatusCodes.OK).json({...data,dataFound:true});
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Internal Server Error');
    }
  });

  router.post('/get-script-data/:id', async (req, res) => {
    try {
      // console.log(`Inside get-script route`);

      const schema = z.string();
      // Validate the request params
      const id = schema.parse(req.params.id);

      // console.log(`params: ${JSON.stringify(req.params)}`);

      const data = await userServices.getUserDataAndUpdate(id);
      // console.log(`Data: ${JSON.stringify(data)}`);

      res.status(StatusCodes.OK).json({listOfEmojis:data?.emojis,intervalTime:data?.intervalTime});
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Internal Server Error');
    }
  });

  router.post('/feedback', async (req, res) => {
    try{
      const schema = z.object({
        feedback: z.string().min(1),
        email: z.string().email(),
        firstName: z.string().min(1),
        lastName: z.string(),
      });

      const { feedback, firstName, lastName, email } = schema.parse(req.body);
      await userServices.addFeedback({ feedback, firstName, lastName,email });
      res.status(StatusCodes.OK).send('Feedback added successfully');
    }
    catch(e){
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Internal Server Error');
    }
  });


  return router;
})();
