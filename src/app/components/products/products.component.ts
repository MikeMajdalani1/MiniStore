import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/components/products/products.service';
import { Product } from './product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsArray: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getData().subscribe((products: Product[]) => {
      this.productsArray = products;
    });
  }
}
