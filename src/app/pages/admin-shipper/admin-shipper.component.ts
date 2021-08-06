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
  constructor(private shipperService: ShipperService, private pagination: PaginationService) { }

  get(){
    this.shipperService.ReturnAllShippers().subscribe(res => {
      this.shippers = res;
      //this.pagination.countAllPage = this.getProducts.countPage;
    });
  }

  ngOnInit(): void {
    this.get();
  }

}
