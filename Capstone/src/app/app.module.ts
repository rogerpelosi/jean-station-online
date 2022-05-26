import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AboutusComponent } from './aboutus/aboutus.component';



const routes: Routes = [
  {path: 'admin-products', component:AdminproductsComponent},
  {path: 'user-home', component:UserhomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminproductsComponent,
    UpdateproductComponent,
    NavbarComponent,
    AdminproductsComponent,
    UserhomeComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
