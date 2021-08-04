import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGetAllProduct } from "../interface/IGetAllProduct";
import { IProduct } from "../interface/IProduct"; 

@Injectable()
export class ProductService {
    public pathBase: string = "https://localhost:5001/kinds/"

    constructor(private http:HttpClient){}

    public ReturnAllProducts(id:number, params:any):Observable<IGetAllProduct> {
        return this.http.get<IGetAllProduct>(`${this.pathBase}`+ `${id}` + "/products", {params});
      }
}