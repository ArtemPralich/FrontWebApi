import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IKind } from "../interface/IKind"; 


@Injectable()
export class AuthService {
    public pathBase: string = "https://localhost:5001/kinds"

    constructor(private http:HttpClient, private router: Router){}



    authenticated(): boolean{
      this.checkToken();
      return (localStorage.getItem("jwt") !== null)
    }
    roles():string{
      var role = localStorage.getItem("role") || "no";
      return role;
    }

    logout(){
      localStorage.removeItem('role');
      localStorage.removeItem('jwt');
      localStorage.removeItem('date');
      this.router.navigate(["/login"]);
    }

    checkToken(){
      var date = localStorage.getItem("date") || "0";
      var a = new Date()
      if((a.getTime() - (+date)) >= 14 * 3600 * 24 * 1000){
       this.logout()
      }
    }

    login(): Observable<HttpResponse<string>>{ 
      const myHeaders = new HttpHeaders({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Methods": "GET, PATCH, PUT, POST, DELETE, OPTIONS"
         
        });
      return this.http.post<string>(`https://localhost:5001/Authentication/login`, 
          JSON.stringify({
              userName: (<HTMLInputElement>document.getElementById("username")).value,
              password: (<HTMLInputElement>document.getElementById("password")).value
          }), { headers:myHeaders,observe: 'response'} );

    }
    register(user: any){
      //if(this.authenticated()) return; 
      this.http.post<string>(`https://localhost:5001/Authentication`, user , { observe: 'response'}).subscribe(response => {
        
        const token = (<any>response).body.token; 
        localStorage.setItem("jwt", token);

        const header = response.headers.get('roles');
          if(header !== null){
            localStorage.setItem("role", header);
          }
        
        localStorage.setItem("date",`${(new Date()).getTime()}`);

        this.router.navigate(["/"]);
      }, error =>{
        alert(error)
        console.log(error);

      });
    }     
}