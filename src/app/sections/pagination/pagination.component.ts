import { Component, OnInit } from '@angular/core';
import { AdminProductComponent } from 'src/app/pages/admin-product/admin-product.component';
import { PaginationService } from 'src/app/service/PaginationService';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  constructor(public pagination : PaginationService) {
       this.pagination.callMethodOfSecondComponent(); 
   }
  ngOnInit(): void {
  }
}
