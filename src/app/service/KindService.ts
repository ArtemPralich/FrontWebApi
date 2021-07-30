import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IKind } from "../interface/IKind"; 

@Injectable()
export class KindService {
    public pathBase: string = "https://localhost:5001/kinds"

    constructor(private http:HttpClient){}

    public ReturnAllKinds():Observable<IKind[]> {
      var token = localStorage.getItem("jwt");
      const myHeaders = new HttpHeaders({
        "Authorization": "Bearer " + token
      });
        return this.http.get<IKind[]>(`${this.pathBase}`, { headers:myHeaders });
      }
}