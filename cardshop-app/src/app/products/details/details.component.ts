import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Card } from 'src/models/Card';
import { CardService } from 'src/app/services/card.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  cardID: string = ""
  card :Card[] = []
  quantity: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private cardService: CardService, private cartService: CartService) {
    this.activatedRoute.url.subscribe(url => {
      this.cardID = url[1].path;
  });
  }

  ngOnInit(): void {
    this.cardService.getData().subscribe(res => {
      this.card = res.filter(card => card.id === parseInt(this.cardID))
    })
  }
  addToCart(card: Card, name:string){
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
