import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  deleteEmployee(id: string): void {
    const stid=Number(id);
    this.employeeService.deleteEmployee(stid).subscribe(() => {
      this.getEmployees(); // Refresh the list
    });
  }

  updateEmployee(id: string): void {
    this.router.navigate(['/update-employee', id]);
  }

  employeeDetails(id: string): void {
    this.router.navigate(['/employee-details', id]);
  }
}
