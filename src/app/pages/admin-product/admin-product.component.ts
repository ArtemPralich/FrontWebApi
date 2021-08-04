import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { IGetAllProduct } from 'src/app/interface/IGetAllProduct';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductService } from 'src/app/service/ProductService';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
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
  constructor(private productService : ProductService, private router : Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(
      params => {
        if(params["id"] != null) {
            this.kindId = params['id'];
          }  
          console.log(params["id"])
      }
  );}
  
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

  setKindId(){  
    this.kindId =+((<HTMLInputElement>document.getElementById("productKindId")).value);
    this.get();
  }
  get(){
    this.productService.ReturnAllProducts(this.kindId, this.Params ).subscribe(res => {
      this.getProducts = res;
      alert(this.getProducts.countPage)
      this.router.navigate([`admin/kinds/${this.kindId}/products`]);
    }, error => {
      alert("Invalid value kindId");
    });
  }

  ngOnInit(): void {
    
    this.get()
  }

}
