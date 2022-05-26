import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductcardscontainerComponent } from './productcardscontainer/productcardscontainer.component';
import { HeaderComponent } from './header/header.component';
import { EditproductdialogComponent } from './editproductdialog/editproductdialog.component';
import { NewproductComponent } from './newproductform/newproduct.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';

//routing import:
import { HttpClientModule } from '@angular/common/http';

//form building imports:
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//material imports:
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ProductcardComponent,
    ProductcardscontainerComponent,
    HeaderComponent,
    EditproductdialogComponent,
    NewproductComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
