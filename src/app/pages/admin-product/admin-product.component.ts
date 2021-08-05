import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { IGetAllProduct } from 'src/app/interface/IGetAllProduct';
import { IProduct } from 'src/app/interface/IProduct';
import { PaginationComponent } from 'src/app/sections/pagination/pagination.component';
import { PaginationService } from 'src/app/service/PaginationService';
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
    pageNumber: 1,
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

  public actProduct:IProduct={
    productId:0,
    name:"",
    price:0
  }

  public editProduct:IProduct={
    productId:0,
    name:"",
    price:0
  }

  public kindId: number = 1;

  constructor(private productService : ProductService, private router : Router, private route: ActivatedRoute, public pagination: PaginationService) { 
    this.route.params.subscribe(
      params => {
        if(params["id"] != null) {
            this.kindId = params['id'];
        }
          //console.log(params["id"])
      }
  );}
  initEdit(id:number, name:string, price:number){
    this.editProduct.name = name;
    this.editProduct.price = price;
    this.editProduct.productId = id;
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

  setKindId(){  
    this.kindId =+((<HTMLInputElement>document.getElementById("productKindId")).value);
    this.router.navigate([`admin/kinds/${this.kindId}/products`]);
    this.get();
  }

  get(){
    this.Params.pageNumber = this.pagination.currentPage;
    console.log(this.pagination.currentPage)

    this.productService.ReturnAllProducts(this.kindId, this.Params ).subscribe(res => {
      this.getProducts = res;
      this.pagination.countAllPage = this.getProducts.countPage;
      //this.router.navigate([`admin/kinds/${this.kindId}/products`]);
    }, error => {
      alert("Get failed");
    });
    //this.pagination.countAllPage = this.getProducts.countPage;
  }

  ngOnInit(): void {
    this.get()
  }

  create(){
    this.productService.CreateProduct(this.kindId,this.actProduct).subscribe(res=>{
      console.log("cteated")
    }, error =>{
      alert("Create failed");
    })
    this.actProduct.name = "";
    this.actProduct.price = 0;
    location.reload();
  }

  edit(){
    this.productService.EditProduct(this.kindId, this.editProduct.productId, this.editProduct).subscribe(res=>{
      console.log("edited")
    },error =>{
      alert("Edit failed");
    })
    location.reload();
  }

  delete(id:number){
    this.productService.DeleteProduct(this.kindId, id).subscribe((data)=>{
      console.log("deleted");
    },error =>{
        alert("Edit failed");
    });
    location.reload();
  }

}
