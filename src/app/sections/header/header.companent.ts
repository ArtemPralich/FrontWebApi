import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/AuthService";

@Component({
    selector: 'header-app',
    //templateUrl: './app.component.html',
    templateUrl: `/header.html`,
    styleUrls: ['/header.css']
  })
  export class HeaderCompanent{
    constructor(public authService : AuthService, public router : Router ){}
    isLoggedin = true;
    
    isLoggedIn(){
      return (localStorage.getItem('jwt') == null);
    }
  }