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
    pageSize: 5,
    pageNumber: 1,
  }

    public kinds: IKind[] =[];
    public pageNumber: number = 5;
    constructor(private kindService: KindService) { }
    al(){
      console.log(this.pageNumber);
    }
    ngOnInit(){
      this.kindService.ReturnAllKinds(this.Params).subscribe(res => {
        this.getKinds = res;
      });
    }
  }
