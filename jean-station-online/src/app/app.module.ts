import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { EditproductdialogComponent } from './editproductdialog/editproductdialog.component';
import { OrderComponent } from './order/order.component';

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

import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { LandingComponent } from './landing/landing.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { UserordersComponent } from './userorders/userorders.component';
import { EditorderdialogComponent } from './adminorderdialog/editorderdialog.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
import { UserproductsComponent } from './userproducts/userproducts.component';
import { AdminnewproductComponent } from './adminnewproduct/adminnewproduct.component';
import { ProductComponent } from './product/product.component';
import { AdminproductdialogComponent } from './adminproductdialog/adminproductdialog.component';

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
      {path: '', redirectTo: 'products', pathMatch: 'full'}
    ],
    canActivate: [CanactivateGuard]
  },
  {
    path: 'user',
    component: UserhomeComponent,
    children: [
      {path: 'orders', component: UserordersComponent},
      {path: 'about', component: AboutComponent}
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
    EditproductdialogComponent,
    OrderComponent,
    AdminhomeComponent,
    UserhomeComponent,
    LandingComponent,
    AdminordersComponent,
    UserordersComponent,
    EditorderdialogComponent,
    AdminproductsComponent,
    UserproductsComponent,
    AdminnewproductComponent,
    ProductComponent,
    AdminproductdialogComponent
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
