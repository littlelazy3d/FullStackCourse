var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let TodosService = class TodosService {
    todos = [
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
    create(title) {
        const todo = {
            id: Date.now(),
            title: title,
            completed: false,
        };
        this.todos.push(todo);
        return todo;
    }
    update(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (!todo) {
            return null;
        }
        todo.completed = !todo.completed;
        return todo;
    }
    remove(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        return {
            message: 'Todo deleted',
        };
    }
};
TodosService = __decorate([
    Injectable()
], TodosService);
export { TodosService };
//# sourceMappingURL=todos.service.js.map