import { Component, OnInit } from '@angular/core';
import { IGetProductBasket } from 'src/app/interface/IGetProductBasket';
import { BasketService } from 'src/app/service/BasketService';
import { NotificationService } from 'src/app/service/NotificationRename';
import { PaginationService } from 'src/app/service/PaginationService';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  
  public myProducts : IGetProductBasket[] = []
  public totalPrice :number = 0;
  public totalCount :number = 0;
  public countPrice(){
    this.totalCount = 0;
    this.totalPrice = 0;
    this.myProducts.forEach(element => {
      this.totalCount += element.count;
      this.totalPrice += element.count*element.returnProduct.price;
    });
  }
  constructor(private basket: BasketService, private pagination: PaginationService, private notificationService: NotificationService) { 
    this.pagination.invokeEvent.subscribe(value => {    
      this.get(); 
  });
  }
  get(){
    this.basket.getBasket().subscribe(res=>{
      this.myProducts = res;
      this.countPrice();
    },error=>{
      //alert("Error!Open Console");
    });
  }
  add(productId:number, count:number){
    this.basket.addProduct(productId, count).subscribe(res=>{
      this.get();
      //location.reload();
    },error=>{});
  }
  delete(productId:number,){
    this.basket.deleteProduct(productId).subscribe(res=>{
      this.notificationService.output("Deleted");
      this.get();
      //location.reload();
    },error=>{});
  }
  roundPrice(price:number):any{
    return Math.round(price*100)/100;
  }
  ngOnInit(): void {
    this.get();
  }
}
