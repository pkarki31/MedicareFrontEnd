import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(private cartService: CartService) { }

  isEmptyObject(items){

    const len = Object.values(items).length;

    console.log("len : "+len)

     const isDisabled=true;

    if(len>0){
      return true;
    }

    else {

      return false;
    }
    
    
  }
 
  ngOnInit(): void {
  }

}
