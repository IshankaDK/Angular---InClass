import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import {CustomerDetailsComponent} from "./components/customer-details/customer-details.component";

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'detail/:id', component: CustomerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
