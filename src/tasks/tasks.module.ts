import { Module } from '@nestjs/common';
import { TasksController } from 'src/tasks/tasks.controller';

@Module({
  controllers: [TasksController]
})
export class TasksModule {}
