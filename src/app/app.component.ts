import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
}

export class Product {
  id: number;
  name: String;
  description: String|null;
  price: Number;

  constructor(id: number, name: string, price: number, description: string|null = null) {
    this.id = id;
    this.name = name;
    this.description = description ? description: null;
    this.price = price;
  }
}
