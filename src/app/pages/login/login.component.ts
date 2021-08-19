import { Component, Input } from '@angular/core';
import { IKind } from '../../interface/IKind';
import { Observable } from "rxjs";
import { KindService } from '../../service/KindService';
import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthService } from 'src/app/service/AuthService';


@Component({
    selector: 'login-app',
    templateUrl: `/login.html`,
    styleUrls: ['./login.css']
})

export class LoginComponent implements OnInit{
    tokenKey:string = "accessToken";
    tokenStr : string = "" ; 
    
    constructor(private http:HttpClient, private router: Router, public auth: AuthService){
        
    }    
    
    ngOnInit(){
        //this.loginService.login();
    }
  }
  