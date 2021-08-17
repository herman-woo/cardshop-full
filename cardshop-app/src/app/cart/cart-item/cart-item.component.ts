import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/models/Orders';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item:Order;
  @Output() removeOrder: EventEmitter<Order> = new EventEmitter;
  @Output() updateCost: EventEmitter<Order> = new EventEmitter;
  newQuantity:number = 0;
  constructor(private cartService:CartService) {
      this.item = {
        order_id:0,
        product_id:0,
        product_name:"",
        product_price:0,
        order_qty:0,
        order_price:0
      }
   }


  ngOnInit(): void {
    this.newQuantity = this.item.order_qty
  }
  updateQty(){
    this.item.order_qty = this.newQuantity
    this.updateCost.emit()
  }
  removeSelf(order:Order):void {
    this.removeOrder.emit(order)
  }
}
