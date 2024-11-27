import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee: Employee = { id: "0", firstName: '', lastName: '', emailId: '' };

  constructor(private employeeService: EmployeeService, private router: Router) {}

  saveEmployee(): void {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      // Calculate the next ID as a string
      const maxId = employees.length > 0 
        ? Math.max(...employees.map(e => parseInt(e.id, 10) || 0)) 
        : 0;
      this.employee.id = (maxId + 1).toString(); // Assign the incremented ID as a string
  
      // Save the new employee
      this.employeeService.createEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    });
  }
  
  
}
