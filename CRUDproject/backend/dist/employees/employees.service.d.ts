export declare class EmployeesService {
    private employees;
    findAll(): {
        id: number;
        name: string;
        email: string;
        position: string;
    }[];
    create(employee: any): any;
    update(id: number, employee: any): {
        id: number;
        name: string;
        email: string;
        position: string;
    } | null;
    remove(id: number): {
        message: string;
    };
}
