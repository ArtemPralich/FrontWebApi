import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/notfound/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { KindComponent } from './pages/kind/kind.component';
import { ShipperComponent } from './pages/shipper/shipper.component';
import { ProductComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'kinds', component: KindComponent,},
  { path: 'admin', component: AdminComponent,},
  { path: 'kinds/:id/products', component: ProductComponent,},  // maybe // children: [ { outlet: "primary", path: ':id/products', component: ProductComponent, }]},// свойство outlet используется для назначения router-outlet
  { path: 'shippers', component: ShipperComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LoginComponent},
  { path: '**', component: NotFoundComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
