import { Injectable } from '@angular/core';
import { Card } from 'src/models/Card';
import { Order } from 'src/models/Orders';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  orderID: number = 1;
  cart:Order[] = []
  cost: number = 0
  

  constructor() { }
  getCart(){
    return this.cart
  }
  getTotal():number{
    try{
      this.cost = this.cart.map((order) => order.product_price*order.order_qty).reduce((prev,curr) => {
        return prev += curr
      })
      return this.cost
    }
    catch(error){
      this.cost = 0
      return this.cost
    }

  }

  addToCart(card:Card,qty:number):void{
    let newOrder = new Order()
    newOrder.order_id = this.orderID
    newOrder.product_id = card.id
    newOrder.product_name = card.product_name
    newOrder.product_price = card.product_price
    newOrder.order_qty = qty
    this.orderID += 1;
    this.cart.push(newOrder)
  }
  removeFromCart(order:Order){
    this.cart = this.cart.filter(item => item.order_id !== order.order_id)
  }
}
