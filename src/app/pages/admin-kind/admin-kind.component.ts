import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGetAllKinds } from 'src/app/interface/IGetAllKinds';
import { IKind } from 'src/app/interface/IKind';
import { KindService } from 'src/app/service/KindService';
import { PaginationService } from 'src/app/service/PaginationService';
import { IndexKind } from 'typescript';

@Component({
  selector: 'app-admin-kind',
  templateUrl: './admin-kind.component.html',
  
  styleUrls: ['./admin-kind.component.css']
})
export class AdminKindComponent implements OnInit {

  constructor(private kindService : KindService, private router : Router, private pagination: PaginationService) {
    this.pagination.invokeEvent.subscribe(value => {    
      this.get(); 
    });
   }

  public kinds: IKind[] = [];
  
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

  public kind : IKind = {
    kindId : 0,
    name : "",
    about : ""
  };

  public editKind: IKind = this.kind;

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.Params.pageNumber = this.pagination.currentPage;
    this.kindService.ReturnAllKinds(this.Params).subscribe(res => {
      this.getKinds = res;
      this.pagination.countAllPage = this.getKinds.countPage;
    });
  }

  initEdit(k:IKind){
    this.editKind = k;
  }
  create(){ 
    console.log(this.kind.name);
    this.kindService.CreateKind(this.kind).subscribe((data)=>{console.log("created");},
    error=>{
      alert("Creare kind failed")
    });
    location.reload();
  }
  delete(id:number){
    this.kindService.DeleteKind(id).subscribe((data)=>{
      console.log("deleted");});
    location.reload();
  }
  edit(id:number){
    this.kindService.EditKind(id, this.editKind ).subscribe((data)=>{ 
      console.log("edited");});
      location.reload();
  }
}
