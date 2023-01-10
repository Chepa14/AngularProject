import { Injectable } from '@angular/core';
import {Product} from "./app.component";
import {HttpClient} from "@angular/common/http";

export interface IShipping {
  type: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}

  public add(product: Product) {
    this.items.push(product);
  }

  public getItems() {
    return this.items;
  }

  public getShippingPrices() {
    return this.http.get<IShipping[]>('/assets/shipping.json');
  }

  public remove(product: Product) {
    let idx = this.items.findIndex(value => {
      value.id = product.id
    });

    if (idx != -1) {
      delete this.items[idx];
    }
  }

  public clearCart() {
    this.items = [];
    return this.items;
  }
}
