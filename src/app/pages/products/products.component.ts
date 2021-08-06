import { Component } from '@angular/core';
import { IProduct } from '../../interface/IProduct';
import { Observable } from "rxjs";
import { ProductService } from '../../service/ProductService';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGetAllProduct } from 'src/app/interface/IGetAllProduct';
import { PaginationService } from 'src/app/service/PaginationService';
import { ParamsProductService } from 'src/app/service/ParamsProductService';

@Component({
    selector: 'product-app',
    templateUrl: `/product.html`,
    styleUrls: ['./product.css']
})

export class ProductComponent implements OnInit{
    
    public getProducts: IGetAllProduct = {
        countPage: 1,
        currentPage:1,
        productsDto: []
    }
    public kindId: number = 1;

    constructor(private productsService: ProductService, private route: ActivatedRoute, public pagination: PaginationService, public params: ParamsProductService) {
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
    
    ngOnInit(){
        this.get();
    }
  }
