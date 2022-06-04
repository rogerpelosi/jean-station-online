import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderComponent } from './components/order/order.component';

//api consumption import:
import { HttpClientModule } from '@angular/common/http';

//routing imports
import {Routes, RouterModule} from '@angular/router';
import { CanactivateGuard } from './guards/canactivate.guard';

//form building imports:
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//material imports:
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { LandingComponent } from './components/landing/landing.component';
import { AdminordersComponent } from './components/adminorders/adminorders.component';
import { UserordersComponent } from './components/userorders/userorders.component';
import { EditorderdialogComponent } from './components/adminorderdialog/editorderdialog.component';
import { AdminproductsComponent } from './components/adminproducts/adminproducts.component';
import { UserproductsComponent } from './components/userproducts/userproducts.component';
import { ProductComponent } from './components/product/product.component';
import { AdminproductdialogComponent } from './components/adminproductdialog/adminproductdialog.component';
import { CartComponent } from './components/cart/cart.component';
import { CartproductComponent } from './components/cartproduct/cartproduct.component';
import { UserorderdialogComponent } from './components/userorderdialog/userorderdialog.component';
import { CanactivateadminGuard } from './guards/canactivateadmin.guard';
import { FooterComponent } from './footer/footer.component';
import { DescriptiondialogComponent } from './components/descriptiondialog/descriptiondialog.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'about', component: AboutComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
  },
  {
    path: 'admin',
    component: AdminhomeComponent,
    children: [
      {path: 'orders', component: AdminordersComponent},
      {path: 'products', component: AdminproductsComponent},
      {path: 'cart', component: CartComponent},
      {path: '', redirectTo: 'products', pathMatch: 'full'}
    ],
    canActivate: [CanactivateadminGuard]
  },
  {
    path: 'user',
    component: UserhomeComponent,
    children: [
      {path: 'orders', component: UserordersComponent},
      {path: 'products', component: UserproductsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'cart', component: CartComponent}, //change component used
      {path: '', redirectTo: 'products', pathMatch: 'full'}
    ],
    canActivate: [CanactivateGuard]
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    HeaderComponent,
    OrderComponent,
    AdminhomeComponent,
    UserhomeComponent,
    LandingComponent,
    AdminordersComponent,
    UserordersComponent,
    EditorderdialogComponent,
    AdminproductsComponent,
    UserproductsComponent,
    ProductComponent,
    AdminproductdialogComponent,
    CartComponent,
    CartproductComponent,
    UserorderdialogComponent,
    FooterComponent,
    DescriptiondialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
