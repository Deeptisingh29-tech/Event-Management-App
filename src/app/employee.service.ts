import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers:this.headers

  }

  constructor(public http:HttpClient) { }

  // loadEmployeeData(){
  //   this.http.get("http://localhost:3000/employees").subscribe({
  //     next:(data:any) => console.log(data),
  //     error:(error:any) => console.log(error),
  //     complete:() => console.log("Completed")
      
  //   })
  // }

  url:string = "http://localhost:3000/employees";

  loadEmployeeData():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:3000/employees");
  }

  storeEmployeeData(employee:any):Observable<Employee>{
    return this.http.post<Employee>("http://localhost:3000/employees", employee);
  }

  // it is considered as path param(spring boot)
  findEmployeeById(id:any):Observable<Employee>{
    return this.http.get<Employee>("http://localhost:3000/employees"+id);
  }

  delete(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:3000/employees/"+id);
  }

  // delete(id:any):Observable<any>{
  //   const url = `${this.url}/${id}`;
  //   return this.http.delete<any>(url, this.httpOptions);
  // }

  getUpdateEmployee(id:number):Observable<Employee>{
    const url = `${this.url}/${id}`;
    return this.http.get<Employee>(url, this.httpOptions);
  }

  update(employee: Employee):Observable<Employee>{
    const url = `${this.url}/${employee.id}`;
    return this.http.put<Employee>(url, employee, this.httpOptions).pipe(
      map(() => employee)
    
    );
  }

}
