/* eslint-disable prettier/prettier */
// import { Module } from '@nestjs/common';
// import { TodoService } from './todo.service';
// import { TodoController } from './todo.controller';

// @Module({
//   providers: [TodoService],
//   controllers: [TodoController]
// })
// export class TodoModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from './todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}