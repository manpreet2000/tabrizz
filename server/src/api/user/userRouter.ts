import { Router } from 'express';
import { z } from 'zod';
import { userServices } from './userService';
import { StatusCodes } from 'http-status-codes';
import { IGetUserAuthInfoRequest } from '@/utils/interfaces';

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
      res.status(StatusCodes.OK).send('Data added successfully');
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

  router.get('/get-script-data/:id', async (req, res) => {
    try {
      console.log(`Inside get-script route`);

      const schema = z.string();
      // Validate the request params
      const id = schema.parse(req.params.id);

      console.log(`params: ${JSON.stringify(req.params)}`);

      const data = await userServices.getUserData(id);
      console.log(`Data: ${JSON.stringify(data)}`);

      res.status(StatusCodes.OK).json({emojis:data?.emojis,intervalTime:data?.intervalTime});
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Internal Server Error');
    }
  });


  return router;
})();
