import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IUserRegister } from 'src/app/interface/IUserRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: IUserRegister = {
    FirstName : '',
    LastName:  "",
    UserName:  "",
    Password:  "",
    Email:  "",
    PhoneNumber: "",
    Roles: ["User"]
  };
  constructor(private http:HttpClient, private router: Router) { }
  register(){
    var json = JSON.stringify(this.user);
    
    this.http.post<string>(`https://localhost:5001/Authentication`, this.user).subscribe(res => {
      const token = (<any>res).token; 
      localStorage.setItem("jwt", token);
      this.router.navigate(["/"]);
  } );
  }
  ngOnInit(): void {

  }

}
