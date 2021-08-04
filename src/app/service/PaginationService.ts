import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGetAllProduct } from "../interface/IGetAllProduct";

@Injectable()
export class PaginationService {

    constructor(private http:HttpClient){}
    public countNumPage : number = 3;
    public currentPage : number = 1;
    public countAllPage : number = 30;
    public test : number = 0;
    countPage(currentPage:number){
        if(currentPage>3) this.countNumPage = 3;
        else this.countNumPage = currentPage
    
    }
    changePage(num: number){
        if((this.currentPage  + num)<=this.countAllPage  && this.countAllPage + num > 1 )
        this.currentPage = this.currentPage + num;
        console.log(this.currentPage)
        //alert(this.currentPage)
        //alert(this.adminProduct.getProducts.currentPage);
    };
    
}