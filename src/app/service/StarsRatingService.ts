import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IGetAllProduct } from "../interface/IGetAllProduct";
//import { PaginationComponent } from "../sections/pagination/pagination.component";

@Injectable()
export class StarsRatingService {
    constructor(private http:HttpClient){}
    public countStars : number = 0;
    public returnStars : number = 0;
    public ObjectId : number = 0;
    invokeEvent: Subject<any> = new Subject(); 
    edit(n:number,m:number){
        this.ObjectId = n;
        this.returnStars = m;
        this.invokeEvent.next();
    }
    getStars(n:number,m:boolean):number[]{
        n = Math.round(n);
        if(m == false){
          let a:number[] = new Array(5 - n);
          for(let b = 1; b <= a.length; b++){
            a[b-1] = n+b;
          }
          return a;
        }
        else{
          let a:number[] = new Array(n);
          for(let b = 1; b <= a.length; b++){
            a[b-1] = b;
          }
          return a;
        }
    }
}

