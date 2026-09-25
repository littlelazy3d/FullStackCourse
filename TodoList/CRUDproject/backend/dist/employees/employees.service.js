var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let EmployeesService = class EmployeesService {
    employees = [
        {
            id: 1,
            name: 'John',
            email: 'john@example.com',
            position: 'Developer',
        },
        {
            id: 2,
            name: 'Sarah',
            email: 'sarah@example.com',
            position: 'Designer',
        },
    ];
    findAll() {
        return this.employees;
    }
    create(employee) {
        const newEmployee = {
            id: Date.now(),
            ...employee,
        };
        this.employees.push(newEmployee);
        return newEmployee;
    }
    update(id, employee) {
        const index = this.employees.findIndex((employee) => employee.id === id);
        if (index === -1) {
            return null;
        }
        this.employees[index] = {
            ...this.employees[index],
            ...employee,
        };
        return this.employees[index];
    }
    remove(id) {
        this.employees = this.employees.filter((employee) => employee.id !== id);
        return {
            message: 'Employee deleted',
        };
    }
};
EmployeesService = __decorate([
    Injectable()
], EmployeesService);
export { EmployeesService };
//# sourceMappingURL=employees.service.js.map