import { DecodedIdToken, getAuth } from 'firebase-admin/auth';
import {  initializeApp, getApps, cert } from 'firebase-admin/app';
import { RequestHandler } from 'express';
import { Request } from "express"


const serviceAccount = require('../../serviceAccountKey.json');

// Initialize Firebase Admin SDK if not already initialized
if (getApps().length === 0) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}
export interface IGetUserAuthInfoRequest extends Request {
  user: DecodedIdToken 
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
       
        const skipAuthRoutes = ['/script.js','/api/getDetails'];
        const skipAuthParams = [
            /^\/api\/getDetails\/\d+$/ 
          ];
          if (
            skipAuthRoutes.includes(req.path) ||
            skipAuthParams.some(regex => regex.test(req.path)) // Test if the path matches any of the regex patterns
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
