import { Component } from '@angular/core';
import { IProduct } from '../../interface/IProduct';
import { Observable } from "rxjs";
import { ProductService } from '../../service/ProductService';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGetAllProduct } from 'src/app/interface/IGetAllProduct';
import { PaginationService } from 'src/app/service/PaginationService';
import { ParamsProductService } from 'src/app/service/ParamsProductService';
import { BasketService } from 'src/app/service/BasketService';
import { NotificationService } from 'src/app/service/NotificationRename';
import { KindService } from 'src/app/service/KindService';
import { IGetAllKinds } from 'src/app/interface/IGetAllKinds';

@Component({
    selector: 'product-app',
    templateUrl: `/product.html`,
    styleUrls: ['./product.css']
})

export class ProductComponent implements OnInit{
    public boolNotif: boolean = false;
    public getProducts: IGetAllProduct = {
        countPage: 1,
        currentPage:1,
        productsDto: []
    }
    public getKinds: IGetAllKinds = {
        countPage: 1,
        currentPage:1,
        kindsDto: []
      }
        Params = {
          searchTerm: "",
          pageSize: 150,
          pageNumber: 1,
        }
    public kindId: number = 1;

    constructor(private productsService: ProductService, private route: ActivatedRoute, public pagination: PaginationService, 
                public params: ParamsProductService, public basket:BasketService, public notificationService :NotificationService, 
                private kindService: KindService) {
        this.pagination.invokeEvent.subscribe(value => {    
            this.get(); 
        });
    }
    getKind(){
        this.kindService.ReturnAllKinds(this.Params).subscribe(res => {
          this.getKinds = res;
        });
      }
    get(){        
        this.route.params.subscribe(
            params => {
                this.kindId = params['id'];
            }
        );
        this.params.Params.pageNumber = this.pagination.currentPage;
        this.productsService.ReturnAllProducts(this.kindId, this.params.Params).subscribe(res => {
            this.getProducts = res;
            this.pagination.countAllPage = this.getProducts.countPage;
        });
    }
    addBasket(id:number, count:number){
        this.basket.addProduct(id,count).subscribe(res =>{
        this.notificationService.output("Added!")
        },error=>{
            alert("nononnono")
        })
    }
    ngOnInit(){
        this.get();
        this.getKind();
    }
  }
