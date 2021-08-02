import { Component } from '@angular/core';
import { IShipper } from '../../interface/IShipper';
import { Observable } from "rxjs";
import { ShipperService } from '../../service/ShipperService';
import { OnInit } from '@angular/core';

@Component({
    selector: 'shipper-app',
    templateUrl: `/shipper.html`
})

export class ShipperComponent implements OnInit{
    public shippers: IShipper[] =[];
    constructor(private shipperService: ShipperService) { }
    ngOnInit(){
      this.shipperService.ReturnAllShippers().subscribe(res => {
        this.shippers = res;
      });
    }
  }
