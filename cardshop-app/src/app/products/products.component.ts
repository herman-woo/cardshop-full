import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/Card';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private cardService: CardService) { }
  cards :Card[] = []
  ngOnInit(): void {
    this.cardService.getData().subscribe(res => {
      this.cards = res;
    })
  }
}
