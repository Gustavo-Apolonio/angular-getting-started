import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    let name = this.checkoutForm.value.name;
    let address = this.checkoutForm.value.address;
    window.alert(
      `Your order has been submitted to ${address} -- Shipping to ${name}'s home!`
    );
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {}
}
