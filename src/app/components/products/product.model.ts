export class Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  categories: Array<any>;

  constructor(
    id: number,
    name: string,
    price: number,
    image: string,
    quantity: number,
    categories: Array<any>
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.quantity = quantity;
    this.categories = categories;
  }
}
