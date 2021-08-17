import { Component, OnInit, Input} from '@angular/core';
import { Card } from 'src/models/Card';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  quantity: number = 0;

  constructor(private cartService:CartService) {
    this.card = {
      id: 0,
      product_name: "",
      product_price: 0,
      card_type: "",
      card_atk: "",
      card_def: "",
      card_description: "",
      img_full:"",
      img_thumb:""
    }
  }

  ngOnInit(): void {
  }
  addItems(card:Card, name:string):void {
    let qty:number = this.quantity
    if (qty > 0){
      alert(`(${qty}) ${name} has been added to the Cart`)
      this.cartService.addToCart(card,qty)
    }
    else{
      alert("Quantity is 0")
    }
  }

}
