import { Component } from '@angular/core';
import { IKind } from '../../interface/IKind';
import { Observable } from "rxjs";
import { KindService } from '../../service/KindService';
import { OnInit } from '@angular/core';

@Component({
    selector: 'kind-app',
    templateUrl: `/kind.html`
})

export class KindComponent implements OnInit{
    public kinds: IKind[] =[];
    constructor(private kindService: KindService) { }
    ngOnInit(){
      this.kindService.ReturnAllKinds().subscribe(res => {
        this.kinds = res;
      });
    }
  }
