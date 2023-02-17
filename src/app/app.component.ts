import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  productsArray = [];

  headers = {
    StoreId: '4',
    UserAddressId: '60877',
    Authorization: 'f44a4aabfc5992514d262d7f517327e7',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://api.manoapp.com/api/v1/users/products/whats_new', {
        headers: this.headers,
        responseType: 'json',
      })
      .subscribe((res: any) => {
        this.productsArray = res.data.items;
        console.log(this.productsArray);
      });
  }
}
