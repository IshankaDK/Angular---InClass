import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {RouterModule} from "@angular/router";
import { SaveCustomerPageComponent } from './components/customer-page/items/save-customer-page/save-customer-page.component';
import { DeleteCustomerPageComponent } from './components/customer-page/items/delete-customer-page/delete-customer-page.component';
import { UpdateCustomerPageComponent } from './components/customer-page/items/update-customer-page/update-customer-page.component';
import { SearchCustomerPageComponent } from './components/customer-page/items/search-customer-page/search-customer-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CustomerPageComponent,
    ItemPageComponent,
    OrderPageComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    SaveCustomerPageComponent,
    DeleteCustomerPageComponent,
    UpdateCustomerPageComponent,
    SearchCustomerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
