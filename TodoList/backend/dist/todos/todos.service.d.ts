export declare class TodosService {
    private todos;
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
    update(id: number): {
        id: number;
        title: string;
        completed: boolean;
    } | null;
    remove(id: number): {
        message: string;
    };
}
