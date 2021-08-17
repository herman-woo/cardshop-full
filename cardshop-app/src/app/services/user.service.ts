import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  first:string = "original";
  last:string = "";
  email:string = "original";
  address: string = "";
  credit:string = "";
  constructor() { }
}
