import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-operation',
  templateUrl: './employee-operation.component.html',
  styleUrls: ['./employee-operation.component.css']
})
export class EmployeeOperationComponent implements OnInit {
  msg:string="";
  employee:any;
  constructor(public router:Router, public es:EmployeeService) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("empInfo");
    if(obj != null){
      this.employee =JSON.parse(obj);
    }
  }

  viewAll(){
    this.router.navigate(["employee"]);
  }

  deleteEmployee(id:any){
    if(confirm("Are You sure, You want to delete the data?")){
      this.es.delete(id).subscribe({
        next:(result:any) => console.log(result),
        error:(error:any) => console.log(error),
        complete:()=>console.log("Completed")
      });
      this.router.navigate(['/employee']);
      // this.msg = "Employee details deleted successfully.....";
      // this.router.navigate(['employee']);
    }
    
    // alert("Employee details deleted successfully.....");
  }
  updateEmployee(id:any){
    this.router.navigate(["/update",id]);
  }

}
