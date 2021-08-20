import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class ParamsProductService {
    Params = {
        currency: "rub",
        pageSize: 12,
        pageNumber: 1,
        minPrice: "",
        orderBy:"",
        maxPrice: "",
        searchTerm: "",
    };
    
    constructor(private http:HttpClient){
      
    }
    currency(str:string){
        this.Params.currency = (<HTMLInputElement>document.getElementById(str)).value;
    }
    sort(str:string){
        this.Params.orderBy = (<HTMLInputElement>document.getElementById(str)).value;
    }
    returnParams():any{
        return this.Params;
    }
}