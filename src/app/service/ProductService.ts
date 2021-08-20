import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGetAllProduct } from "../interface/IGetAllProduct";
import { IProduct } from "../interface/IProduct"; 

@Injectable()
export class ProductService {
    public pathBase: string = "https://localhost:5001/kinds/";
    
    constructor(private http:HttpClient){
    }

    public ReturnAllProducts(kindId:number, params:any):Observable<IGetAllProduct> {
      return this.http.get<IGetAllProduct>(`${this.pathBase}`+ `${kindId}` + "/products", {params});
      }
    public CreateProduct(kindId:number, product : IProduct):Observable<IProduct> {
      return this.http.post<IProduct>(`${this.pathBase}`+ `${kindId}` + "/products", product);
    }
    public EditProduct(kindId:number, id:number, product : IProduct):Observable<any>{
      return this.http.put<any>(`${this.pathBase}`+ `${kindId}` + "/products/" + `${id}`, product);
    }
    public DeleteProduct(kindId:number, id:number,){
      return this.http.delete<any>(`${this.pathBase}`+ `${kindId}` + "/products/" + `${id}`);
    }
    
}