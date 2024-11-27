import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: 'update-employee.component.html',
  styleUrls: ['update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number = 0;
  employee: Employee = { id: "0", firstName: '', lastName: '', emailId: '' };

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
}
