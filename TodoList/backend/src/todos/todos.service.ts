import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  private todos = [
    {
      id: 1,
      title: 'Learn NestJS',
      completed: false,
    },
    {
      id: 2,
      title: 'Build Todo App',
      completed: true,
    },
  ];

  findAll() {
    return this.todos;
  }

  create(title: string) {
    const todo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    this.todos.push(todo);

    return todo;
  }

  update(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      return null;
    }

    todo.completed = !todo.completed;

    return todo;
  }

  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    return {
      message: 'Todo deleted',
    };
  }
}