import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

//import { NzTabsModule } from 'ng-zorro-antd/tabs';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
