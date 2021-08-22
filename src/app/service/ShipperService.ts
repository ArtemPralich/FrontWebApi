import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IShipper } from "../interface/IShipper"; 

@Injectable()
export class ShipperService {
    public pathBase: string = "https://localhost:5001/shipper"

    constructor(private http:HttpClient){}

    public ReturnAllShippers():Observable<IShipper[]> {
       return this.http.get<IShipper[]>(`${this.pathBase}`);
    }

    public CreateShipper(id:number, shipper : IShipper):Observable<IShipper> {
      return this.http.post<IShipper>(`${this.pathBase}/${id}`, shipper);
    }

    public EditShipper(id:number, shipper : IShipper):Observable<any>{
      return this.http.put<any>(`${this.pathBase}/${id}`, shipper);
    }

    public DeleteShipper(id:number){
      return this.http.delete<any>(`${this.pathBase}/${id}`);
    }

    public EditRetingShipper(id:number, stars:number){
      return this.http.post<any>(`${this.pathBase}/${id}`, stars);
    }
}