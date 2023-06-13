import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthJwt {
  async generateToken(payload: any): Promise<string> {
    const secret = process.env.JWT_SECRET;
    const timeJWT = process.env.JWT_EXPIRATION_TIME;
    const jwtToken = jwt.sign(payload, secret, {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    });
    return jwtToken;
  }
}
