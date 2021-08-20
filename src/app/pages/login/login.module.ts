import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/service/AuthService';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
  ]
})
export class LoginModule { 

}
