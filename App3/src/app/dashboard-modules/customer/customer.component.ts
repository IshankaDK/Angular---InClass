import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

export interface customerSchema {
  id: string;
  name: string;
  address: string;
  salary: number;
}

const ELEMENT_DATA: customerSchema[] = [
  {id: 'C001', name: 'Nimal', address: 'galle', salary: 2000},
  {id: 'C003', name: 'Kamla', address: 'galle', salary: 1000},
  {id: 'C002', name: 'sanu', address: 'galle', salary: 2000},
  {id: 'C004', name: 'renu', address: 'galle', salary: 4400},
  {id: 'C005', name: 'hasi', address: 'galle', salary: 2000},
];


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'salary','operate'];
  dataSource = ELEMENT_DATA;
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  loadData(id: string) {
    // this._router.navigate(['/customer/detail',id]).then(resp=>{
    //   console.log('success')
    // },err=>{
    //   console.log(err)
    // })
    -this._router.navigate([]).then(res=>{
      window.open('/customer/detail/'+id,'_blank');
    })
  }
}
