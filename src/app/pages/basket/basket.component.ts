import { Component, OnInit } from '@angular/core';
import { IGetAllKinds } from 'src/app/interface/IGetAllKinds';
import { BasketService } from 'src/app/service/BasketService';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private basket: BasketService) { }
  ngOnInit(): void {
    this.basket.getBasket();
  }

}
