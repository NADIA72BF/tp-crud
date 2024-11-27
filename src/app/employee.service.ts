import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  emailId: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiURL}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}