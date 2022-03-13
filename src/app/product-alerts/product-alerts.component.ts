import { EventEmitter, Output } from '@angular/core';

import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../shared/models/products.interface';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: Product;
  @Output() notify = new EventEmitter();

  constructor() {}
}
