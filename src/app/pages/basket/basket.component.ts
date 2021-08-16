import { Component, OnInit } from '@angular/core';
import { IGetProductBasket } from 'src/app/interface/IGetProductBasket';
import { BasketService } from 'src/app/service/BasketService';

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
    this.myProducts.forEach(element => {
      this.totalCount += element.count;
      this.totalPrice += element.count*element.returnProduct.price;
    });
  }
  constructor(private basket: BasketService) { }
  get(){
    this.basket.getBasket().subscribe(res=>{
      this.myProducts = res;
      this.countPrice();
    },error=>{
      //alert("Error!Open Console");
    });
  }
  ngOnInit(): void {
    this.get();
  }

}
