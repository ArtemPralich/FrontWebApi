import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IGetProductBasket } from "../interface/IGetProductBasket";
import { IKind } from "../interface/IKind"; 


@Injectable()
export class BasketService {
    public pathBase: string = "https://localhost:5001/kinds"
    public token : any; 
    public myHeaders : any;
    constructor(private http:HttpClient, private router: Router){
        this.token = localStorage.getItem("jwt");
        this.myHeaders = new HttpHeaders({
        "Authorization": "Bearer " + this.token
      });
    }
    logout(){
      localStorage.removeItem('jwt');
    }
    getBasket():Observable<IGetProductBasket[]>{
      return this.http.get<IGetProductBasket[]>(`https://localhost:5001/api/ProductBasket`, {headers: this.myHeaders});
    }
}