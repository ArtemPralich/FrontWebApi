import { Component } from '@angular/core';
import { IShipper } from '../../interface/IShipper';
import { Observable } from "rxjs";
import { ShipperService } from '../../service/ShipperService';
import { OnInit } from '@angular/core';
import { StarratingComponent } from 'src/app/sections/starrating/starrating.component';
import { StarsRatingService } from 'src/app/service/StarsRatingService';

@Component({
    selector: 'shipper-app',
    templateUrl: `/shipper.component.html`,
    styleUrls: ['./shipper.component.css']
})

export class ShipperComponent implements OnInit{
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

    getStars(n:number,m:boolean):number[]{
      n = Math.round(n);
      if(m == false){
        let a:number[] = new Array(5 - n);
        for(let b = 1; b <= a.length; b++){
          a[b-1] = n+b;
        }
        return a;
      }
      else{
        let a:number[] = new Array(n);
        for(let b = 1; b <= a.length; b++){
          a[b-1] = b;
        }
        return a;
      }
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
