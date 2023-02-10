import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
// import { IUserDocument } from '@user/interfaces/user.interface';

// ? creating new property in already existing namespace
declare global {
  namespace Express {
    interface Request {
      currentUser?: AuthPayload;
    }
  }
}

export interface AuthPayload {
  userId: string;
  uId: string; // ? required for saving user data to redis
  email: string;
  username: string;
  avatarColor: string;
  iat?: number;
}

// ? this is for mongodb
export interface IAuthDocument extends Document {
  _id: string | ObjectId;
  uId: string;
  username: string;
  email: string;
  password?: string;
  avatarColor: string;
  createdAt: Date;
  passwordResetToken?: string;
  passwordResetExpires?: number | string;
  comparePassword(password: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}

export interface ISignUpData {
  _id: ObjectId;
  uId: string;
  email: string;
  username: string;
  password: string;
  avatarColor: string;
}

export interface IAuthJob {
  value?: string | IAuthDocument;
}
