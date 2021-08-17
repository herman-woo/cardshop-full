import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  userFirstName: string = ""
  userLastName: string = ""
  userEmail: string = ""
  userTotal: number = 0

  constructor(private userService:UserService, private cartService:CartService) { }

  ngOnInit(): void {
    this.userFirstName = this.userService.first
    this.userLastName = this.userService.last
    this.userEmail = this.userService.email
    this.userTotal = this.cartService.getTotal()
    this.cartService.cart = []
  }

}
