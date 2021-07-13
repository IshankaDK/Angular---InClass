import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {
  selectedId='';

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  loadPage(link: string) {
    if (link === 'delete-customer') {
      // this._router.navigate(['/customer/' + link, 'C-001']).then()
      this._router.navigate(['/customer/' + link, this.selectedId]).then()
      return;
    }
    this._router.navigate(['/customer/' + link]).then()
  }
}
