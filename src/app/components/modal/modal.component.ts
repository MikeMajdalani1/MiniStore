import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface Model {
  title?: string;
  quantity: number;
  categories: Array<any>;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent
  extends SimpleModalComponent<Model, null>
  implements Model
{
  title: string;
  quantity: number;
  categories: Array<any>;
  constructor() {
    super();
  }
}
