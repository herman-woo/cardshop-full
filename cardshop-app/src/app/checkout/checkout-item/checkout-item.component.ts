import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/models/Orders';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent implements OnInit {
  @Input() item:Order;
  constructor() {
    this.item = {
      order_id: 0,
      product_id: 0,
      product_name: "",
      product_price: 0,
      order_qty: 0,
      order_price: 0
    }
  }

  ngOnInit(): void {
  }

}
