/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.todoService.findOne(Number(id));
  }

  @Post()
  create(@Body('title') title: string) {
    return this.todoService.create(title);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('isCompleted') isCompleted: boolean,
  ) {
    return this.todoService.update(Number(id), title, isCompleted);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoService.delete(Number(id));
  }
}

