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
  public editKind: IKind = this.kind;
  constructor(private kindService : KindService, private router : Router) { }

  ngOnInit(): void {
    this.kindService.ReturnAllKinds().subscribe(res => {
      this.kinds = res;
    });
  }
  initEdit(name:string, about:string, id:number){
    this.editKind.name = name;
    this.editKind.about = about;
    this.editKind.kindId = id;
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
