import { Component } from '@angular/core';
import { IKind } from './interface/IKind';
import { Observable } from "rxjs";
import { KindService } from './service/KindService';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    
  }
}
