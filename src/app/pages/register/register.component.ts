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
  constructor(private http:HttpClient, private router: Router, public auth: AuthService) { }
  // public register(){
  //   this.login.register(this.user);
    
    
  //   this.http.post<string>(`https://localhost:5001/Authentication`, this.user , { observe: 'response' } ).subscribe(response => {
  //     this.resultStatus = response.status;
  //     const token = (<any>response).token; 
  //     localStorage.setItem("jwt", token);
  //     this.router.navigate(["/"]);
  //   }, error =>{
  //     //console.log(error);
  //   });
  // }  
  ngOnInit(): void {
  }

}
