import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataGridController } from './controller/data.controller';

@Module({
  imports: [],
  controllers: [DataGridController],
  providers: [AppService],
})
export class AppModule {}
