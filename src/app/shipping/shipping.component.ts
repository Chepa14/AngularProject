import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

import {CartService, IShipping} from "../cart.service";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit{
  shippingCosts!: Observable<IShipping[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }
}
