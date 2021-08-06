import { Component } from '@angular/core';
import { IKind } from '../../interface/IKind';
import { Observable } from "rxjs";
import { KindService } from '../../service/KindService';
import { OnInit } from '@angular/core';
import { IGetAllKinds } from 'src/app/interface/IGetAllKinds';

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
      pageSize: 15,
      pageNumber: 1,
    }

    
    constructor(private kindService: KindService) { }
   
    get(){
      this.kindService.ReturnAllKinds(this.Params).subscribe(res => {
        this.getKinds = res;
      });
    }

    ngOnInit(){
      this.get();
    }
  }
