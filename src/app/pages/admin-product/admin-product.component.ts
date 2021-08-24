import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { IGetAllProduct } from 'src/app/interface/IGetAllProduct';
import { IProduct } from 'src/app/interface/IProduct';
import { PaginationComponent } from 'src/app/sections/pagination/pagination.component';
import { KindService } from 'src/app/service/KindService';
import { PaginationService } from 'src/app/service/PaginationService';
import { ParamsProductService } from 'src/app/service/ParamsProductService';
import { ProductService } from 'src/app/service/ProductService';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  public getProducts: IGetAllProduct = {
    countPage: 1,
    currentPage:1,
    productsDto: []
  }

  public actProduct:IProduct={///Todo: add create about  
    productId:0,
    name:"",
    about: "",
    price:0, 
    shipperName:"",
    foto: "",
    shipperId:0
  }

  public editProduct:IProduct={ ///Todo: add edit about  
    productId:0,
    name:"",
    about: "",
    price:0,
    shipperName:"",
    foto: "",
    shipperId:0
  }

  public kindId: number = 1;
  public kindName: string = "";
  constructor(private productService : ProductService, private router : Router, private route: ActivatedRoute, public pagination: PaginationService, public params: ParamsProductService, private kindService :KindService) { 
    this.pagination.invokeEvent.subscribe(value => {    
      this.get(); 
    });
    this.route.params.subscribe(
      params => {
        if(params["id"] != null) {
            this.kindId = params['id'];
        }
          //console.log(params["id"])
      }
  );}
  initEdit(pr: IProduct){
    this.editProduct = pr;
  }

  setKindId(){  
    this.kindId =+((<HTMLInputElement>document.getElementById("productKindId")).value);
    this.router.navigate([`admin/kinds/${this.kindId}/products`]);
    this.get();
  }

  get(){
    this.params.Params.pageNumber = this.pagination.currentPage;
    this.kindService.ReturnKind(this.kindId).subscribe(res=>{
      this.kindName = res.name;
    })
    this.productService.ReturnAllProducts(this.kindId, this.params.Params ).subscribe(res => {
      this.getProducts = res;
      this.pagination.countAllPage = this.getProducts.countPage;
      //this.router.navigate([`admin/kinds/${this.kindId}/products`]);
    }, error => {
      alert("Get failed");
    });
    //this.pagination.countAllPage = this.getProducts.countPage;dsfsdf
  }

  ngOnInit(): void {
    this.get()
  }

  create(){
    this.productService.CreateProduct(this.kindId,this.actProduct).subscribe(res=>{
      console.log("cteated")
      this.actProduct.name = "";
      this.actProduct.price = 0;
      location.reload();
    }, error =>{
      alert("Create failed");
    })
  }

  edit(){
    this.productService.EditProduct(this.kindId, this.editProduct.productId, this.editProduct).subscribe(res=>{
      console.log("edited")
      location.reload();
    },error =>{
      alert("Edit failed");
    })
  }

  delete(id:number){
    this.productService.DeleteProduct(this.kindId, id).subscribe((data)=>{
      console.log("deleted");
      location.reload();
    },error =>{
        alert("Edit failed");
    });
  }

}
