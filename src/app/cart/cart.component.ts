import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../shared/models/products.interface';
import { Customer } from '../shared/models/customer.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[];
  checkoutForm: UntypedFormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: UntypedFormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  get formValue() {
    return this.checkoutForm.value as Customer;
  }

  private createForm(model: Customer): UntypedFormGroup {
    return this.formBuilder.group(model);
  }
  private updateForm(model: Partial<Customer>): void {
    this.checkoutForm.patchValue(model);
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: Customer) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
