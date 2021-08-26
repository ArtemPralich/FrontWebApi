import { Component } from '@angular/core';
import { IShipper } from '../../interface/IShipper';
import { Observable } from "rxjs";
import { ShipperService } from '../../service/ShipperService';
import { OnInit } from '@angular/core';
import { StarsRatingService } from 'src/app/service/StarsRatingService';
import { Router } from '@angular/router';

@Component({
    selector: 'shipper-app',
    templateUrl: `/shipper.component.html`,
    styleUrls: ['./shipper.component.css']
})

export class ShipperComponent implements OnInit{
    public shippers: IShipper[] =[];
    
    constructor(private shipperService: ShipperService, public starsService: StarsRatingService, private router: Router) { 
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
    loadShipperPage(id:number){
      this.router.navigate([`shippers/${id}`]);
    }
    ngOnInit(){
      this.get()
    }
  }
