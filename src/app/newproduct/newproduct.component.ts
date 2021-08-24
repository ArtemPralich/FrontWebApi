import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/AuthService';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  ngOnInit(){
    
  }
  constructor(public authService : AuthService, public router : Router ){}
    isLoggedin = true;
    
    isLoggedIn(){
      return (localStorage.getItem('jwt') == null);
    }

}
