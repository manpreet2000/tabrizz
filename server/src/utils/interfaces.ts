import { DecodedIdToken } from "firebase-admin/auth";
import { Request } from "express"

export interface IGetUserAuthInfoRequest extends Request<any> {
    user: DecodedIdToken 
  }