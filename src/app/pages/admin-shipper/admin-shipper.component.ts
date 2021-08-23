import { Component, OnInit } from '@angular/core';
import { IShipper } from 'src/app/interface/IShipper';
import { PaginationService } from 'src/app/service/PaginationService';
import { ShipperService } from 'src/app/service/ShipperService';

@Component({
  selector: 'app-admin-shipper',
  templateUrl: './admin-shipper.component.html',
  styleUrls: ['./admin-shipper.component.css']
})

export class AdminShipperComponent implements OnInit {
  public shippers: IShipper[] = []
  public shipper:IShipper = {
    shipperId: 0,
    name: "",
    foto: "",
    finalRating:0,
    locationLng:0,
    locationLat:0
  }
  public newshipper:IShipper = {
    shipperId: 0,
    name: "",
    foto: "",
    finalRating:0,
    locationLng:0,
    locationLat:0
  }
  constructor(private shipperService: ShipperService, private pagination: PaginationService) {
    
  }
  copy(ship:IShipper){
    this.shipper = ship;
  }

  create(){
    this.shipperService.CreateShipper(this.newshipper).subscribe(res => {
      location.reload()
    });
  }
  get(){
    this.shipperService.ReturnAllShippers().subscribe(res => {
      this.shippers = res;
    });
  }
  delete(id:number){
    this.shipperService.DeleteShipper(id).subscribe(res =>{
      location.reload()
    })
  }
  edit(){
    console.log(this.shipper)
    this.shipperService.EditShipper(this.shipper.shipperId, this.shipper).subscribe(res =>{
      location.reload()
    })
  }


  ngOnInit(): void {
    this.get();
  }

}
