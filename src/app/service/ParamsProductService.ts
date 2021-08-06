import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core"; 

@Injectable()
export class ParamsProductService {
    constructor(private http:HttpClient){}
    public Params = {
        currency: "rub",
        pageSize: 15,
        minPrice: "0",
        orderBy:"",
        pageNumber:1,
        maxPrice: "5000000000000",
        searchTerm: "",
    };
    public p : HttpParams = new HttpParams();
    add(){
        
    }
}