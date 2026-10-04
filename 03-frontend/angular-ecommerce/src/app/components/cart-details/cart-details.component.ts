import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';

import { CartItem } from '../../common/cart-item';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  // Store the items currently in the shopping cart
  cartItems: CartItem[] = [];

  // Store the total price of all items in the cart
  totalPrice: number = 0;

  // Store the total quantity of all items in the cart
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    // Load the cart details when the component is initialized
    this.listCartDetails();
  }

  listCartDetails() {

    // Get the cart items from the CartService
    this.cartItems = this.cartService.cartItems;

    // Subscribe to total price changes
    // This updates the total price whenever the cart changes
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // Subscribe to total quantity changes
    // This updates the total quantity whenever the cart changes
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    // Calculate the initial cart totals
    this.cartService.computeCartTotals();
  }

  // Called when the user clicks the + button
  incrementQuantity(theCartItem: CartItem) {

    // Add one more quantity of the selected cart item
    this.cartService.addToCart(theCartItem);
  }

  // Called when the user clicks the - button
  decrementQuantity(theCartItem: CartItem) {

    // Decrease the quantity of the selected cart item
    this.cartService.decrementQuantity(theCartItem);
  }
}