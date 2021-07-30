import { Component } from '@angular/core';
import { IProduct } from '../../interface/IProduct';
import { Observable } from "rxjs";
import { ProductService } from '../../service/ProductService';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import * as $ from "jquery";
//declare var $:any;
@Component({
    selector: 'product-app',
    templateUrl: `/product.html`
})

export class ProductComponent implements OnInit{
    Params = {
        currency: "rub",
        pageSize: 10,
        minPrice: "0",
        orderBy:"",
        maxPrice: "5000000000000",
        searchTerm: "",
        

    };
    public products: IProduct[] =[];
    public kindId: number = 0;
    public resultString: string = "";
    constructor(private productsService: ProductService, private route: ActivatedRoute) {
    }
    search(){
        this.Params.searchTerm = (<HTMLInputElement>document.getElementById("search")).value;
        this.get();
    }
    sort(){
        this.Params.orderBy = (<HTMLInputElement>document.getElementById("sort")).value;
        this.get();
        
    }
    currency() {
        this.Params.currency = (<HTMLInputElement>document.getElementById("selectCurrency")).value;
        this.get();
    }
    changePrice(){
        this.Params.minPrice = (<HTMLInputElement>document.getElementById("minPrice")).value; 
        this.Params.maxPrice = (<HTMLInputElement>document.getElementById("maxPrice")).value;
        this.get();
    }
    
        
    get(){    
        this.route.params.subscribe(
            params => {
                this.kindId = params['id'];
            }
        );
        this.productsService.ReturnAllProduct(this.kindId, this.Params).subscribe(res => {
            this.products = res;
        });
    }
    ngOnInit(){
        this.get();
    }
  }
