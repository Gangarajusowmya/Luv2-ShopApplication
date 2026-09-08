import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  // Stores the total price of all items in the shopping cart
  totalPrice: number = 0;

  // Stores the total quantity of items in the shopping cart
  totalQuantity: number = 0;

  // Inject CartService so this component can access cart information
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    // Subscribe to totalPrice from CartService.
    // Whenever the cart total price changes, update totalPrice.
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // Subscribe to totalQuantity from CartService.
    // Whenever the cart quantity changes, update totalQuantity.
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

  }
}