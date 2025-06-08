import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module'; 
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from './config/config.module';
import { MiddlewaresModule } from './middlewares/middlewares.module';
import { ModulesModule } from './modules/modules.module';
import { ProvidersModule } from './providers/providers.module';
import { PublicModule } from './public/public.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, ConfigModule, MiddlewaresModule, ModulesModule, ProvidersModule, PublicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
