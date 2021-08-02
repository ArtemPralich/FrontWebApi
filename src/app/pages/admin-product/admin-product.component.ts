import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
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
    pageSize: 10,
    minPrice: "0",
    orderBy:"",
    maxPrice: "5000000000000",
    searchTerm: "",
};
  public products: IProduct[] =[];
  public kindId: number = 1;
  constructor(private productService : ProductService, private router : Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(
      params => {
          if(params["id"] != null) this.kindId = params['id'];
          console.log(params["id"])
      }
  );}

  setKindId(){
    
    //this.kindId =+((<HTMLInputElement>document.getElementById("productKindId")).value);
    alert(this.kindId);
    this.router.navigate(["admin/kinds/${this.kindId}/products"]);
  }
  

  ngOnInit(): void {
    this.productService.ReturnAllProducts(this.kindId, this.Params ).subscribe(res => {
      this.products = res;
    });
  }

}
