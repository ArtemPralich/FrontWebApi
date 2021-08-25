import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGetAllKinds } from 'src/app/interface/IGetAllKinds';
import { KindService } from 'src/app/service/KindService';
import { PaginationService } from 'src/app/service/PaginationService';

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.css']
})
export class KindComponent implements OnInit {

  public getKinds: IGetAllKinds = {
    countPage: 1,
    currentPage:1,
    kindsDto: []
  };
  Params = {
    searchTerm: "",
    pageSize: 15,
    pageNumber: 1,
    
  };

  constructor(private kindService : KindService, private router : Router, private pagination: PaginationService) { }

  ngOnInit(): void {
    this.get()
  }
  get(){
    this.Params.pageNumber = this.pagination.currentPage;
    this.kindService.ReturnAllKinds(this.Params).subscribe(res => {
      this.getKinds = res;
      this.pagination.countAllPage = this.getKinds.countPage;
    });
  }
}
