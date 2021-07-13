import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerPageComponent} from "./components/customer-page/customer-page.component";
import {ItemPageComponent} from "./components/item-page/item-page.component";
import {OrderPageComponent} from "./components/order-page/order-page.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {OrderGuard} from "./components/guards/order.guard";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {SaveCustomerPageComponent} from "./components/customer-page/items/save-customer-page/save-customer-page.component";
import {DeleteCustomerPageComponent} from "./components/customer-page/items/delete-customer-page/delete-customer-page.component";
import {UpdateCustomerPageComponent} from "./components/customer-page/items/update-customer-page/update-customer-page.component";
import {SearchCustomerPageComponent} from "./components/customer-page/items/search-customer-page/search-customer-page.component";

const routes: Routes = [
  // {path:'',component:CustomerPageComponent},
  {path:'',redirectTo:'/customer',pathMatch:'full'},
  {path:'customer',component:CustomerPageComponent, children:[
      {path:'',redirectTo:'/customer/save-customer',pathMatch:'full'},
      {path:'save-customer',component:SaveCustomerPageComponent},
      {path:'delete-customer/:id',component:DeleteCustomerPageComponent},
      {path:'update-customer',component:UpdateCustomerPageComponent},
      {path:'search-customer',component:SearchCustomerPageComponent}
    ]},
  {path:'item',component:ItemPageComponent},
  {path:'order',component:OrderPageComponent, canActivate:[OrderGuard]},
  {path:'login',component:LoginPageComponent},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
