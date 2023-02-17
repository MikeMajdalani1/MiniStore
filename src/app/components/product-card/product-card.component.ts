import { Component, Input, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SimpleModalService } from 'ngx-simple-modal';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() ProductName: string;
  @Input() ProductPrice: number;
  @Input() ProductSmallImage: string;
  @Input() ProductQuantity: number;
  @Input() ProductCategories: Array<any>;

  ngOnInit(): void {}
  constructor(private SimpleModalService: SimpleModalService) {}

  showAlert() {
    this.SimpleModalService.addModal(ModalComponent, {
      title: this.ProductName,
      quantity: this.ProductQuantity,
      categories: this.ProductCategories,
    });
  }
}
