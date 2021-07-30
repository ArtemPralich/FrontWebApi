import { Component, OnInit } from '@angular/core';
import { IShipper } from 'src/app/interface/IShipper';
import { ShipperService } from 'src/app/service/ShipperService';

//import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public shippers: IShipper[] =[];
    constructor(private shipperService: ShipperService) { }
    ngOnInit(){
      this.shipperService.ReturnAllKinds().subscribe(res => {
        this.shippers = res;
      });
    }

}
