import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Login } from '../login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginRef = new FormGroup({
    email:new FormControl(),
    pass:new FormControl()
  });
  msg:string = '';
  loginDetails:Array<Login>=[]
  constructor() { }

  ngOnInit(): void {
  }

  createAccount(){
    let login = this.loginRef.value;
    let l = {email:login.email, pass:login.pass};
    let result = this.loginDetails.find(obj => obj.email == l.email);
    if(result == undefined){
      this.loginDetails.push(l);
      sessionStorage.setItem("loginInfo", JSON.stringify(this.loginDetails));
      alert("Account created successfully ....");
      // this.msg = "Account created successfully ....";
    }else{
      this.msg = "Email must be unique....";
    }

    this.loginRef.reset();
    
  }

}
