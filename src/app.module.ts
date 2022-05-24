import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { UserModule } from '@app/user/user.module';
import { NewModule } from '@app/new/new.module';
import { EmailModule } from '@app/email/email.module';
import { EventModule } from '@app/event/event.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '@app/ormconfig';
import { AuthGuard } from './guards/auth.guard';
import { AuthMiddleware } from './user/middlewares/auth.middleware';

@Module({
  imports: [
    TagModule,
    UserModule,
    NewModule,
    EmailModule,
    EventModule,
    TypeOrmModule.forRoot(ormconfig),
  ],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
