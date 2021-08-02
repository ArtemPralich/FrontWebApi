import { Component, OnInit } from '@angular/core';
import { IKind } from 'src/app/interface/IKind';
import { KindService } from 'src/app/service/KindService';

@Component({
  selector: 'app-admin-kind',
  templateUrl: './admin-kind.component.html',
  
  styleUrls: ['./admin-kind.component.css']
})
export class AdminKindComponent implements OnInit {
  public kinds: IKind[] = [];

  constructor(private kindService : KindService) { }

  ngOnInit(): void {
    this.kindService.ReturnAllKinds().subscribe(res => {
      this.kinds = res;
    });
  }

  
    
  
}
