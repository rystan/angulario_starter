import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { ShippingCost } from '../shared/models/shipping-costs.interface';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts: Observable<ShippingCost>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
