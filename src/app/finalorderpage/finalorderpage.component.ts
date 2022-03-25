import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-finalorderpage',
  templateUrl: './finalorderpage.component.html',
  styleUrls: ['./finalorderpage.component.css']
})
export class FinalorderpageComponent implements OnInit {

 

  items = this.cartService.getItems();

  total = this.cartService.getTotal();

  

  constructor(private cartService: CartService) { }



  ngOnInit(): void {
    console.log("total from final :"+this.total)
  }

}
