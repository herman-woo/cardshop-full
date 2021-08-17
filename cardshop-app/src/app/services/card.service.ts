import { Injectable } from '@angular/core';
import { Card } from 'src/models/Card';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }
  getData(): Observable<Card[]>{
    return this.http.get<Card[]>("http://cardshopapi-env.eba-td8gqtne.us-east-1.elasticbeanstalk.com/products/all")
  }
}
