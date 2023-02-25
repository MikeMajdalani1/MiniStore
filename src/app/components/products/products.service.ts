import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

interface ApiResponse {
  data: {
    items: any[];
  };
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = [];
  constructor(private http: HttpClient) {}
  headers = {
    StoreId: '4',
    UserAddressId: '60877',
    Authorization: 'f44a4aabfc5992514d262d7f517327e7',
  };

  getProduct(id: number): Product {
    return this.products[id];
  }

  getData() {
    return this.http
      .get<ApiResponse>(
        'https://api.manoapp.com/api/v1/users/products/whats_new',
        {
          headers: this.headers,
          responseType: 'json',
        }
      )
      .pipe(
        map((res) =>
          res.data.items.map(
            (item, index) =>
              new Product(
                index,
                item.title,
                item.price,
                item.images[0].small,
                item.quantity,
                item.categories
              )
          )
        ),
        tap((res) => (this.products = res))
      );
  }
}
