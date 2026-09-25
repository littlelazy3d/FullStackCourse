import { TodosService } from './todos.service.js';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAll(): {
        id: number;
        title: string;
        completed: boolean;
    }[];
    create(title: string): {
        id: number;
        title: string;
        completed: boolean;
    };
    update(id: string): {
        id: number;
        title: string;
        completed: boolean;
    } | null;
    remove(id: string): {
        message: string;
    };
}
