import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-firebase-jwt';
import * as firebase from 'firebase-admin';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(Strategy, 'firebase-auth') {
  private defaultApp: firebase.app.App;
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
    this.defaultApp = firebase.initializeApp({
      credential: firebase.credential.applicationDefault(),
    });
  }
  async validate(token: string) {
    const firebaseUser: firebase.auth.DecodedIdToken = await this.defaultApp
      .auth()
      .verifyIdToken(token, true)
      .catch(err => {
        console.log(err);
        throw new UnauthorizedException(err.message);
      });
    if (!firebaseUser) {
      throw new UnauthorizedException();
    }

    // TODO: fetch user from backend (or create/link new user)
    const user = { role: 'USER' };

    return {
      ...user,
      firebaseData: firebaseUser,
    };
    return firebaseUser;
  }
}
