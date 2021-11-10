import { Module } from '@nestjs/common';
import { TasksController } from 'src/tasks/tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
