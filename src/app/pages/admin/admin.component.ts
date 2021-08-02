import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IKind } from 'src/app/interface/IKind';
import { IShipper } from 'src/app/interface/IShipper';
import { KindService } from 'src/app/service/KindService';
import { ShipperService } from 'src/app/service/ShipperService';

//import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public strAction: string ="";
  public shippers: IShipper[] = []
  public kinds: IKind[] = []
  //public kind: IKind;
  constructor(private shipperService: ShipperService, private kindService: KindService, private router : Router) { 
    

  }
  // check(str:string){
  //   if(this.strAction==kinds)
  // }
  
  change(str: string){
    this.strAction = str;
  }
  panelKinds(){
    this.strAction = "kinds"
    this.kindService.ReturnAllKinds().subscribe(res => {
      this.kinds = res;
    });
  }
  panelShipper(){
    this.shipperService.ReturnAllShippers().subscribe(res => {
      this.shippers = res;
    });
  }
  ngOnInit(){
    if(this.strAction == "kinds") this.panelKinds();
    // this.kindService.ReturnKind(2).subscribe(res => {
    //   console.log(res);
    // });
    // this.kindService.CreateKind(kind).subscribe(res => {

    // })
  }


}
