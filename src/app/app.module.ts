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

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModule } from './pages/register/register.module';
import { LoginService } from './service/LoginService';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminKindComponent } from './pages/admin-kind/admin-kind.component';
import { AdminShipperComponent } from './pages/admin-shipper/admin-shipper.component';
import { AdminProductComponent } from './pages/admin-product/admin-product.component';
import { FooterComponent } from './sections/footer/footer.component';
import { PaginationComponent } from './sections/pagination/pagination.component';
import { PaginationService } from './service/PaginationService';




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
    LoginComponent,
    AdminComponent,
    AdminKindComponent,
    AdminShipperComponent,
    KindComponent,
    FooterComponent,
    PaginationComponent,
    AdminProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    //BrowserAnimationsModule,
    //RegisterModule,
  ],
  providers: [KindService, ShipperService, ProductService, LoginService, PaginationService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
