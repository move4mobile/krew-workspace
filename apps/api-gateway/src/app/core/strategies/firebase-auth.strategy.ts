import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-firebase-jwt';
import * as firebase from 'firebase-admin';
import { AuthService } from '../services';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(Strategy, 'firebase-auth') {
  private defaultApp: firebase.app.App;
  constructor(private readonly authService: AuthService) {
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

    console.log({ firebaseUser });

    const user = this.authService.getUserByFirebaseUserId(firebaseUser.uid);
    return user;
  }
}
