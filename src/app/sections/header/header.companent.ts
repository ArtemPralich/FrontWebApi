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
    public boolVisibleMenu :boolean = false;
    constructor(public authService : AuthService, public router : Router ){}
    
    isLoggedin = true;
    
    visibleMenu(){
      if(!this.boolVisibleMenu) (<HTMLInputElement>document.getElementById("menuHub")).style.height ="auto"
      else (<HTMLInputElement>document.getElementById("menuHub")).style.height ="80px"
      this.boolVisibleMenu = !this.boolVisibleMenu;
    }


    

    isLoggedIn(){
      return (localStorage.getItem('jwt') == null);
    }
  }