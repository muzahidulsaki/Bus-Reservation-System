import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './/admin/admin.controller';
import { UserModule } from './user/user.module';
import { BusOwnerModule } from './bus_owner/bus_owner.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();

@Module({
  imports: [UserModule, BusOwnerModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: process.env.DB_HOST ,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    } 
  )],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}
