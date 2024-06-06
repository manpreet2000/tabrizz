import { DecodedIdToken, getAuth } from 'firebase-admin/auth';
import {  initializeApp, getApps, cert, applicationDefault } from 'firebase-admin/app';
import { RequestHandler } from 'express';
import { IGetUserAuthInfoRequest } from '@/utils/interfaces';
import { env } from '../config';



// Initialize Firebase Admin SDK if not already initialized
if (getApps().length === 0) {
  initializeApp({
    credential: applicationDefault()
  });
}

declare module 'express-session' {
  interface SessionData {
    user?: {
      id: string;
      email: string;
    };
  }
}
const auth = getAuth();

// Add the correct type for the req parameter
export const firebaseAuth: RequestHandler = async (req, res, next) => {
    try{      
        // const skipAuthRoutes = ['/script.js','/api/getDetails'];
          
        if (
            req.path.startsWith('/script.js') ||
            req.path.startsWith('/users/get-script-data') ||
            req.path.startsWith('/users/feedback')
          ){
            next();
            return;
        }
        
  if (req.session?.user) {
    next();
    return;
  }
  const idToken = req.headers.authorization;
  
  if (!idToken) {
    return res.status(401).send('Unauthorized');
  }
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    (req as IGetUserAuthInfoRequest).user = decodedToken;
    return next();
  } catch (e) {
    return res.status(401).send('Unauthorized');
  }
}
catch(e){
    return res.status(401).send('Unauthorized');    
}
};
