import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KindComponent } from './kind.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    KindComponent,
  ],
  imports: [
    NzPaginationModule,
    NzPaginationModule,
    CommonModule
  ]
})
export class KindModule { }