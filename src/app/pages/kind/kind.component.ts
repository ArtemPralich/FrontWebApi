import { Component } from '@angular/core';
import { IKind } from '../../interface/IKind';
import { Observable } from "rxjs";
import { KindService } from '../../service/KindService';
import { OnInit } from '@angular/core';

@Component({
    selector: 'kind-app',
    templateUrl: `/kind.html`,
    styleUrls: ['./kind.css'],
})

export class KindComponent implements OnInit{
    public kinds: IKind[] =[];
    public pageNumber: number = 5;
    constructor(private kindService: KindService) { }
    al(){
      console.log(this.pageNumber);
    }
    ngOnInit(){
      this.kindService.ReturnAllKinds().subscribe(res => {
        this.kinds = res;
      });
    }
  }
