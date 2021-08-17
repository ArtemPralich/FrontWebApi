import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGetAllKinds } from "../interface/IGetAllKinds";
import { IKind } from "../interface/IKind"; 

@Injectable()
export class KindService {
    public pathBase: string = "https://localhost:5001/kinds"


    constructor(private http:HttpClient){}

  public ReturnAllKinds(params:any):Observable<IGetAllKinds> {
    
    return this.http.get<IGetAllKinds>(`${this.pathBase}`, {params});
  }

  public ReturnKind(id:number):Observable<IKind>{

    return this.http.get<IKind>(`${this.pathBase}`+ "/" + id);
  }

  public CreateKind(kind : IKind):Observable<IKind> { 

    return this.http.post<IKind>(`${this.pathBase}`, kind);
  }

  public DeleteKind(id: number):Observable<any>{

    return this.http.delete<any>(`${this.pathBase}/${id}`);
  }
  public EditKind(kindId:number, kind : IKind):Observable<any>{

    return this.http.put<any>(`${this.pathBase}/${kindId}`, kind);
  }
}