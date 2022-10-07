import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class FirebaseAuthGuard extends AuthGuard('firebase-auth') {
  // getRequest(context: ExecutionContext) {
  //   const ctx = GqlExecutionContext.create(context);
  //   return ctx.getContext().req;
  // }
}
