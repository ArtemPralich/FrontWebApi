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
}