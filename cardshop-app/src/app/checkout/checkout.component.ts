import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/models/Orders';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  total: number = 0;
  orders:Order[] = [];
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  address: string = "";
  creditCard: string = "";
  constructor(private cartService: CartService, private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.orders = this.cartService.getCart()
    this.total = this.cartService.getTotal()
  }
  submitForm():void{
    this.userService.first = this.firstName;
    this.userService.last = this.lastName;
    this.userService.email = this.email;
    this.userService.address = this.address;
    this.userService.credit = this.creditCard;
    this.router.navigate(['/cart/confirmation'])
  }
}
