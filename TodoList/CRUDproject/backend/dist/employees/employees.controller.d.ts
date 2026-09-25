import { EmployeesService } from './employees.service.js';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    findAll(): {
        id: number;
        name: string;
        email: string;
        position: string;
    }[];
    create(employee: any): any;
    update(id: string, employee: any): {
        id: number;
        name: string;
        email: string;
        position: string;
    } | null;
    remove(id: string): {
        message: string;
    };
}
