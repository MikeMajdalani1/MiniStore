import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;

  ngOnInit(): void {}
  constructor(private router: Router) {}

  getMoreInfo() {
    this.router.navigate(['products', this.product.id]);
  }
}
