import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

import { APP_FILTER } from '@nestjs/core';
import { LoggerMiddleware } from 'common/middleware/logger.middleware';
import { HttpExceptionFilter } from 'utils/exceptionHandlers';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
  providers: [{ provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(CatsController);
  }
}
