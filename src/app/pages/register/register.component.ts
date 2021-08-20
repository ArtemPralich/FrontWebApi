import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IUserRegister } from 'src/app/interface/IUserRegister';
import { AuthService } from 'src/app/service/AuthService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public resultStatus : number = 0;
  public user: IUserRegister = {
    FirstName : '',
    LastName:  "",
    UserName:  "",
    Password:  "",
    Email:  "",
    PhoneNumber: "",
    Roles: ["User"]
  };
  public statusAuth : boolean = true;
  constructor(private http:HttpClient, private router: Router, public auth: AuthService) { }

  register(){
    this.auth.register(this.user).subscribe(response => {  
      const token = (<any>response).body.token; 
      localStorage.setItem("jwt", token);
      const header = response.headers.get('roles');
        if(header !== null){
          localStorage.setItem("role", header);
        } 
      localStorage.setItem("date",`${(new Date()).getTime()}`);
      this.router.navigate(["/"]);
    }, error =>{
      this.statusAuth = false;
      alert(error)
      console.log(error);});
  }
   
  ngOnInit(): void {
  }

}
