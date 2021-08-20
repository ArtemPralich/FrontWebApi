import { Component, Input } from '@angular/core';
import { IKind } from '../../interface/IKind';
import { Observable } from "rxjs";
import { KindService } from '../../service/KindService';
import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthService } from 'src/app/service/AuthService';


@Component({
    selector: 'login-app',
    templateUrl: `/login.html`,
    styleUrls: ['./login.css']
})

export class LoginComponent implements OnInit{
    public statusAuth: boolean = true;
    constructor(private http:HttpClient, private router: Router, public auth: AuthService){
        
    }
    login(){
        this.auth.login().subscribe((res)=> {
          
            const header = res.headers.get('roles');
            const token = (<any>res).body.token; 
            localStorage.setItem("jwt", token);
            var a = new Date();
            if(header !== null){
              localStorage.setItem("role", header);
            }
            localStorage.setItem("date",`${(new Date()).getTime()}`);
  
            this.router.navigate(["/"]);
        }, error =>{
            this.statusAuth = false;
        });
        (<HTMLInputElement>document.getElementById("password")).value = "";
    }    
    ngOnInit(){
    }
  }
  