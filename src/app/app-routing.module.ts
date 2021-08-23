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
import { AdminKindComponent } from './pages/admin-kind/admin-kind.component';
import { AdminShipperComponent } from './pages/admin-shipper/admin-shipper.component';
import { AdminProductComponent } from './pages/admin-product/admin-product.component';
import { PaginationComponent } from './sections/pagination/pagination.component';
import { UserComponent } from './pages/user/user.component';
import { BasketComponent } from './pages/basket/basket.component';
import { AccountComponent } from './pages/account/account.component';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { PageShipperComponent } from './pages/pageshipper/pageshipper.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'user', component: UserComponent, 
    children:[
      {path: 'account', component: AccountComponent,},
      {path: 'basket', component: BasketComponent, },
      {path: 'setting', component: BasketComponent, }
    ], canActivate: [AuthGuard]
  },
  { path: 'kinds', component: KindComponent,
    children:[
      { path: ':id/products', component: ProductComponent,},
      
      //{ path: 'kinds/:id/',component: ProductComponent}
    ]

  },
  { path: 'admin', component: AdminComponent,
    children: [
      { path: 'kinds', component: AdminKindComponent,},
      { path: 'shippers', component: AdminShipperComponent,},
      { path: 'products', component: AdminProductComponent,},
      { path: 'kinds/:id/products', component: AdminProductComponent,},
    ],// canActivate: [RolesGuard]
  },
  //{ path: 'kinds/:id/products', component: ProductComponent,},  // maybe // children: [ { outlet: "primary", path: ':id/products', component: ProductComponent, }]},// свойство outlet используется для назначения router-outlet
  { path: 'shippers', component: ShipperComponent},
  { path: 'shippers/:id', component: PageShipperComponent},
  { path: 'register', component: RegisterComponent,},
  { path: 'login', component: LoginComponent, },
  { path: 'logout', component: LoginComponent},
  { path: '**', component: NotFoundComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
