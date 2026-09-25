import { Injectable } from '@nestjs/common'

@Injectable()
export class EmployeesService {
  private employees = [
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
  ]

  findAll() {
    return this.employees
  }

  create(employee: any) {
    const newEmployee = {
      id: Date.now(),
      ...employee,
    }

    this.employees.push(newEmployee)

    return newEmployee
  }

  update(id: number, employee: any) {
    const index = this.employees.findIndex(
      (employee) => employee.id === id
    )

    if (index === -1) {
      return null
    }

    this.employees[index] = {
      ...this.employees[index],
      ...employee,
    }

    return this.employees[index]
  }

  remove(id: number) {
    this.employees = this.employees.filter(
      (employee) => employee.id !== id
    )

    return {
      message: 'Employee deleted',
    }
  }
}