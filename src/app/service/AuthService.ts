import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IKind } from "../interface/IKind"; 


@Injectable()
export class AuthService {
    public pathBase: string = "https://localhost:5001/kinds"

    constructor(private http:HttpClient, private router: Router){}

    resultStatus:any;

    authenticated(): boolean{
      return (localStorage.getItem("jwt") !== null)
    }

    logout(){
      localStorage.removeItem('jwt');
      this.router.navigate(["/login"]);
    }
    login(){
      if(this.authenticated()) return; 
      const myHeaders = new HttpHeaders({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Methods": "GET, PATCH, PUT, POST, DELETE, OPTIONS"
         
        });
      this.http.post<string>(`https://localhost:5001/Authentication/login`, 
          JSON.stringify(
          {
              userName: (<HTMLInputElement>document.getElementById("username")).value,
              password: (<HTMLInputElement>document.getElementById("password")).value
          }), { headers:myHeaders,observe: 'response'} ).subscribe((res)=> {
          
          const header = res.headers.get('roles');
          if(header !== null){
            localStorage.setItem("role", header);
          }
          const token = (<any>res).token; 
          localStorage.setItem("jwt", token);
          this.router.navigate(["/"]);
      }, );
    }
    register(user: any){
      //if(this.authenticated()) return; 
      this.http.post<string>(`https://localhost:5001/Authentication`, user , { observe: 'response' }).subscribe(response => {
        this.resultStatus = response.status;
        const header = response.headers.get('roles');
          if(header !== null){
            localStorage.setItem("role", header);
          }
        const token = (<any>response).token; 
        localStorage.setItem("jwt", token);
        this.router.navigate(["/"]);
      }, error =>{
        alert(error)
        console.log(error);

      });
    }     
}