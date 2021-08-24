import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IGetAllProduct } from "../interface/IGetAllProduct";
//import { PaginationComponent } from "../sections/pagination/pagination.component";

@Injectable()
export class StService {
    constructor(private http:HttpClient){}
    public indic : boolean = false; 
    public countNumPage : number = 3;
    public currentPage : number = 1;
    public countAllPage : number = 30;
    public test : number = 0;

    invokeEvent: Subject<any> = new Subject(); 

   

}

