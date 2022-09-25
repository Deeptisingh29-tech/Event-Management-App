import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Employee } from './../employee';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  val:any;
  employees:Array<Employee> = [];
  employee:any;

  empRef = new FormGroup({
    id:new FormControl(),
    first_name:new FormControl(),
    last_name:new FormControl(),
    email:new FormControl()

  })
  

  constructor(public router:Router, public es:EmployeeService, public route:ActivatedRoute) { }

 
  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    });
    console.log("id: "+ this.val);
    this.es.getUpdateEmployee(this.val).subscribe(data => {
      this.employee = data;
    })
  }

  update(){
    this.es.update(this.employee).subscribe(data => {
    });
    this.getEmployees();
    this.router.navigate(["employee"]);
  }
  getEmployees(){
    // this.es.loadEmployeeData().subscribe((response:any) => {
    //   this.employees = response;
    //   // next:(data:any) => this.employees=data
    // })
    this.es.loadEmployeeData().subscribe({
      next:(data:any) => this.employees=data,
      error:(error:any) => console.log(error),
      complete:()=>console.log("Completed")
    })

  }

  back(){
    this.router.navigate(["employee-details"]);
  }

}
