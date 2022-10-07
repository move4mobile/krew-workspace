import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((data: unknown, context: ExecutionContext) => {
  return context.switchToHttp().getRequest().user;
});
