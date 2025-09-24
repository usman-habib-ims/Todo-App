/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>,
  ) {}

  // Get all todos
  findAll() {
    return this.todoRepo.find();
  }


  async create(title: string): Promise<Todo> {
    const todo = this.todoRepo.create({ title });
    const saved = await this.todoRepo.save(todo);
    console.log('All Todos:', await this.todoRepo.find()); // 👈 Print todos to console
    return saved;
  }

  // Get one todo
  async findOne(id: number): Promise<Todo> {
    const todo = await this.todoRepo.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  // Update todo
  async update(id: number, title: string, isCompleted: boolean) {
    const todo = await this.todoRepo.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    todo.title = title;
    todo.isCompleted = isCompleted;
    return this.todoRepo.save(todo);
  }

 async partialUpdate(
    id: number,
    updateFields: Partial<{ title: string; isCompleted: boolean }>,
  ) {
    const todo = await this.todoRepo.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    Object.assign(todo, updateFields);
    return this.todoRepo.save(todo);
  }

  // Delete todo
  delete(id: number) {
    return this.todoRepo.delete(id).then(() => {});
  }
}
