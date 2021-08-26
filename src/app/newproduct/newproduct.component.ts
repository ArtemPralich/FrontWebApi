import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IShipper } from '../interface/IShipper';
import { AuthService } from '../service/AuthService';
import { ShipperService } from '../service/ShipperService';
import { StarsRatingService } from '../service/StarsRatingService';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  public shippers: IShipper[] =[];
    
    constructor(private shipperService: ShipperService, public starsService: StarsRatingService ) { 
      this.starsService.invokeEvent.subscribe(value => {    
        this.editStars(this.starsService.ObjectId,this.starsService.returnStars);
      });
    }
    editStars(id:number, stars:number){
      this.shipperService.EditRetingShipper(id, stars).subscribe(res =>{
        this.get();
      },error =>{
        alert("nononononono");
      })
    }
    get(){
      this.shipperService.ReturnAllShippers().subscribe(res => {
        this.shippers = res;
      });
    }
    ngOnInit(){
      this.get()
    }
}
