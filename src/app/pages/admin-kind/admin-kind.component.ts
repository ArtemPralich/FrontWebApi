import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IKind } from 'src/app/interface/IKind';
import { KindService } from 'src/app/service/KindService';
import { IndexKind } from 'typescript';

@Component({
  selector: 'app-admin-kind',
  templateUrl: './admin-kind.component.html',
  
  styleUrls: ['./admin-kind.component.css']
})
export class AdminKindComponent implements OnInit {
  public kinds: IKind[] = [];

  public kind : IKind = {
    kindId : 0,
    name : "",
    about : ""
  };
  constructor(private kindService : KindService, private router : Router) { }

  ngOnInit(): void {
    this.kindService.ReturnAllKinds().subscribe(res => {
      this.kinds = res;
    });
  }
  create(){ 
    
    this.kind.name =(<HTMLInputElement>document.getElementById("kindName")).value;
    this.kind.about =(<HTMLInputElement>document.getElementById("kindAbout")).value;
    console.log(this.kind.name);
    this.kindService.CreateKind(this.kind).subscribe((data)=>{console.log("created");});
    
    location.reload();
  }
  delete(id:number){
    this.kindService.DeleteKind(id).subscribe((data)=>{
      console.log("deleted");});
    location.reload();
  }
}
