import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IGetAllProduct } from "../interface/IGetAllProduct";
//import { PaginationComponent } from "../sections/pagination/pagination.component";

@Injectable()
export class PaginationService {
    constructor(private http:HttpClient){}
    public indic : boolean = false; 
    public countNumPage : number = 3;
    public currentPage : number = 1;
    public countAllPage : number = 30;
    public test : number = 0;

    invokeEvent: Subject<any> = new Subject(); 

    realod() { 
        this.invokeEvent.next()      
    }
    countPage(currentPage:number){
        if(currentPage>3) this.countNumPage = 3;
        else this.countNumPage = currentPage;
    }
    changePage(num: number){
        this.countPage(this.currentPage);
        if((this.currentPage  + num)<=this.countAllPage && (this.currentPage + num) >= 1 ){
            this.currentPage = this.currentPage + num;
            this.realod()
        }
    };
}

