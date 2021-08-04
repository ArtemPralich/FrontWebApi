import { Component } from '@angular/core';
import { IProduct } from '../../interface/IProduct';
import { Observable } from "rxjs";
import { ProductService } from '../../service/ProductService';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGetAllProduct } from 'src/app/interface/IGetAllProduct';

@Component({
    selector: 'product-app',
    templateUrl: `/product.html`,
    styleUrls: ['./product.css']
})

export class ProductComponent implements OnInit{
    Params = {
        currency: "rub",
        pageSize: 15,
        minPrice: "0",
        orderBy:"",
        maxPrice: "5000000000000",
        searchTerm: "",
    };
    public getProducts: IGetAllProduct = {
        countPage: 1,
        currentPage:1,
        productsDto: []
      }
    public kindId: number = 1;
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
        this.productsService.ReturnAllProducts(this.kindId, this.Params).subscribe(res => {
            this.getProducts = res;
        });
    }
    ngOnInit(){
        this.get();
    }
  }
