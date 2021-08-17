import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IKind } from "../interface/IKind"; 


@Injectable()
export class LoginService {
    public pathBase: string = "https://localhost:5001/kinds"

    constructor(private http:HttpClient, private router: Router){}
    logout(){
      localStorage.removeItem('jwt');
      this.router.navigate(["/login"]);
    }
    login(){
      const myHeaders = new HttpHeaders({
          "Content-Type": "application/json"
        });
      this.http.post<string>(`https://localhost:5001/Authentication/login`, 
          JSON.stringify(
          {
              userName: (<HTMLInputElement>document.getElementById("username")).value,
              password: (<HTMLInputElement>document.getElementById("password")).value
          }), 
          {
              headers:myHeaders
          })
      .subscribe(res => {
          const token = (<any>res).token; 
          localStorage.setItem("jwt", token);
          this.router.navigate(["/"]);
      } );
  }   
}