import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Order } from 'src/models/Orders';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Order[] = [];
  total: number = 0;
 
  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
    this.items = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }
  removeOrder(order:Order):void{
    alert("Item removed")
    this.cartService.removeFromCart(order)
    this.items = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }
  updateCost():void{
    this.total = this.cartService.getTotal();
  }
  checkoutCart():void{
    console.log(this.total)
  }
}
