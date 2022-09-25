import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeOperationComponent } from './employee-operation/employee-operation.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'employee', component:EmployeeComponent},
  {path: 'employee-details', component:EmployeeOperationComponent},
  {path: 'login', component:LoginComponent},
  {path: 'login/signup', component:SignupComponent},
  {path: 'login/signup/signin', component:LoginComponent},
  {path: 'update/:id', component:EmployeeUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
