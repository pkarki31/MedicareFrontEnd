import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Products } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Products[] = [];

  constructor() { }



  addToCart(product: Products) {
    this.items.push(product);
  }

  getTotal(){

    var total:number = 0 
    var len:number = this.items.length 
    var temp: number =0
while( temp < len) { 
  total = total + this.items[temp].price
   console.log("Entered while") 
   temp++
}

console.log("total price : "+total)
    return total;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
