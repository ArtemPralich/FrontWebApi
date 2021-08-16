import { Component, ViewChild, ViewChildren } from '@angular/core';
import { IKind } from '../../interface/IKind';
import { Observable } from "rxjs";
import { KindService } from '../../service/KindService';
import { OnInit } from '@angular/core';
import { IGetAllKinds } from 'src/app/interface/IGetAllKinds';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../products/products.component';

@Component({
    selector: 'kind-app',
    templateUrl: `/kind.html`,
    styleUrls: ['./kind.css'],
})

export class KindComponent implements OnInit{
  
  public getKinds: IGetAllKinds = {
    countPage: 1,
    currentPage:1,
    kindsDto: []
  }
    Params = {
      searchTerm: "",
      pageSize: 150,
      pageNumber: 1,
    }
    public kindId:number = 0 ;
    constructor(private kindService: KindService, private route: ActivatedRoute ) {}
    
    get(){
      this.kindService.ReturnAllKinds(this.Params).subscribe(res => {
        this.getKinds = res;
      });
    }

    ngOnInit(){

      this.get();
    }
  }
