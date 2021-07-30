import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JitCompiler } from '@angular/compiler';
import { KindService } from './service/KindService';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/notfound/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { KindComponent } from './pages/kind/kind.component';
import { HeaderCompanent } from './sections/header/header.companent';
import { ShipperComponent } from './pages/shipper/shipper.component';
import { ShipperService } from './service/ShipperService';
import { ProductComponent } from './pages/products/products.component';
import { ProductService } from './service/ProductService';
import { LoginComponent } from './pages/login/login.component';

import { KindModule } from './pages/kind/kind.module';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from './pages/register/register.module';
import { LoginService } from './service/LoginService';
//import { RegisterComponent } from './pages/register/register.component';
//import { NzTabsModule } from 'ng-zorro-antd/tabs';
//registerLocaleData(en);
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
//import { MatTabsModule } from '@angular/material/tabs'
//import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    HeaderCompanent,
    ShipperComponent,
    ProductComponent,
    //RegisterComponent,
    LoginComponent
  ],
  imports: [
    //NzFormModule,
    NzButtonModule,
    NzTabsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    //BrowserAnimationsModule,
    //RegisterModule,
  ],
  providers: [KindService, ShipperService, ProductService, LoginService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
