import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Product } from './product.model';
import { ProductsService } from './products.service';
@Injectable({ providedIn: 'root' })
export class ProductsResolverService implements Resolve<Product[]> {
  constructor(private productsService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.productsService.getData();
  }
}
