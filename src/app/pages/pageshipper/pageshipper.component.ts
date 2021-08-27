import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShipper } from 'src/app/interface/IShipper';
import { ShipperService } from 'src/app/service/ShipperService';
import { google} from "google-maps"

declare var google : google;

@Component({
  selector: 'app-pageshipper',
  templateUrl: './pageshipper.component.html',
  styleUrls: ['./pageshipper.component.css']
})

export class PageShipperComponent implements OnInit {
  constructor(private shippeService:ShipperService, private route: ActivatedRoute) { }
  
  public shipper:IShipper = {
    shipperId: 0,
    name: "",
    foto: "",
    finalRating:0,
    locationLng:0,
    locationLat:0
  }
  ngOnInit(): void{

    var coordinates = {lat: this.shipper.locationLat, lng: this.shipper.locationLat},

    map = new google.maps.Map(<HTMLInputElement>document.getElementById('map'), {
      center: coordinates,
      zoom: 8
    }),    
    marker = new google.maps.Marker({
      position: coordinates,
      map: map,
    });



    let id:number = 0;
    this.route.params.subscribe(
      params => {
          id = params['id'];
      }
  );
    this.get(id);
  }
  get(id: number){
    this.shippeService.ReturnShipper(id).subscribe(res=>{
      this.shipper = res;
    })
  }
}
