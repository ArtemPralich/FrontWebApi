import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { LoginService } from "src/app/service/LoginService";

@Component({
    selector: 'header-app',
    //templateUrl: './app.component.html',
    templateUrl: `/header.html`,
    styleUrls: ['/header.css']
  })
  export class HeaderCompanent{
    constructor(public loginService : LoginService){}
    isLoggedin = true;
    
    isLoggedIn(){
      return (localStorage.getItem('jwt') == null);
    }
  }