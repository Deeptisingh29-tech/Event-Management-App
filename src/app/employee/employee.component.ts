import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empRef = new FormGroup({
    id:new FormControl(),
    first_name:new FormControl(),
    last_name:new FormControl(),
    email:new FormControl()
  })


  employees:Array<Employee> = [];
  constructor(public es:EmployeeService, public router:Router) { }

  ngOnInit(): void {
    this.loadEmployeeDetails();
  }

  loadEmployeeDetails(){
    // this.es.loadEmployeeData();
    this.es.loadEmployeeData().subscribe({
      next:(data:any) => this.employees=data,
      error:(error:any) => console.log(error),
      complete:() => console.log("Completed")
    })
  }

  storeEmployee(){
    let employee = this.empRef.value;
    // console.log(employee);
    this.es.storeEmployeeData(employee).subscribe({
      next:(data:any) => console.log(data),
      error:(error:any) => console.log(error),
      complete:() => this.loadEmployeeDetails()

    })
    this.empRef.reset();
  }

  viewDetails(employee:any){
    // console.log(id);
    sessionStorage.setItem("empInfo", JSON.stringify(employee));
    this.router.navigate(["employee-details"]);

  }

}
