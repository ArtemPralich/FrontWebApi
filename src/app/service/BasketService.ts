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
    data = {
      id : 0,
      count : 0
    };
    constructor(private http:HttpClient, private router: Router){
        this.token = localStorage.getItem("jwt");
        this.myHeaders = new HttpHeaders({
        "Authorization": "Bearer " + this.token
      });
    }
    
    getBasket():Observable<IGetProductBasket[]>{
      return this.http.get<IGetProductBasket[]>(`https://localhost:5001/api/ProductBasket`);
    }
    addProduct(id:number,count:number):Observable<void>{ 
      //alert()
      this.data.id= id;
      this.data.count = count; 
      return this.http.post<void>(`https://localhost:5001/api/ProductBasket`, this.data,);
    }
    deleteProduct(id:number):Observable<void>{ 
      return this.http.delete<void>(`https://localhost:5001/api/ProductBasket/${id}`);
    }
}
