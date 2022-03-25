import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginServiceService } from '../login-service.service';
import { CartService } from '../cart.service';

import { Products } from '../product';


export interface MedicineElement {
  m_id : number;
  medicine_name : string;
  medicine_company : string;
  description : string;
  quantity : number;
  price : number;
  active : string;
  image : string;
  cols:number;
  rows:number;
  
  
}

// const ELEMENT_DATA: MedicineElement[] = [
//   {m_id: 1, medicine_name: 'Crocin', medicine_company: "" ,description: "For HeadAche",quantity:100,price:100,active:"true",image:"Crocin",cols:1,rows:1},
//   {m_id: 2, medicine_name: 'Azithral', medicine_company: "" ,description: "For body pain ",quantity:100,price:100,active:"true",image:"Azithral",cols:1,rows:1},
//   {m_id: 3, medicine_name: 'Citrizin', medicine_company: "" ,description: "",quantity:100,price:100,active:"true",image:"Citrizin",cols:1,rows:1},
//   {m_id: 4, medicine_name: 'CoviSelf', medicine_company: "" ,description: "",quantity:100,price:100,active:"true",image:"CoviSelf",cols:1,rows:1},
//   {m_id: 5, medicine_name: 'Saridon', medicine_company: "" ,description: "",quantity:100,price:100,active:"true",image:"Saridon",cols:1,rows:1},
//   {m_id: 5, medicine_name: 'Sinerist', medicine_company: "" ,description: "",quantity:100,price:100,active:"true",image:"Sinerist",cols:1,rows:1}
  
// ];

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})


export class UserpageComponent implements OnInit {

  medicineElement =[]; 
   listLen:number;
   imageSrc : string 
   imageContactUs : string
   imageAlt : string
   list : MedicineElement[];

  constructor(private MatGridListModule:MatGridListModule,
    private loginService:LoginServiceService,
    private cartService: CartService) { }

    addToCart(product: Products) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }

    checkCart(product: Products) {
      if(product=null){
        window.alert('Add few product to the cart!');
      }
      
    }

  ngOnInit(): void {

    //this.list = ELEMENT_DATA;
    // this.list.forEach(ELEMENT_DATA=>{
    //   MedicineElement['cols']=1;
    //   MedicineElement['rows']=1;
    // })
    this.imageSrc = "./assets/images/aboutus.jpg";
    this.imageContactUs="./assets/images/contactUs.jpg";
    console.log("hi from user ")
    this.loginService.getActiveMedicineRequest().subscribe((data:MedicineElement[])=>{
    
      this.list=data;
      console.log(this.list)
      this.list.forEach(MedicineElement=>{
        MedicineElement['cols']=1;
        MedicineElement['rows']=1;
        //console.log(this.list)
    })
    console.log(this.list)
      
      })
    
    this.listLen=4
    
  }

  onClickSubmit(data) {

    if(data.searchText==""){

      window.location.reload();

    }
    
    this.imageSrc = "./assets/images/aboutus.jpg";
    console.log("hi from user ")
    console.log("searchtxt :"+data.searchText)
    this.loginService.searchMedicineRequest(data.searchText).subscribe((data:MedicineElement[])=>{
    
      this.list=data;
      console.log("before list ..")
      console.log(this.list)
      this.list.forEach(MedicineElement=>{
        MedicineElement['cols']=1;
        MedicineElement['rows']=1;
        //console.log(this.list)
    })
    console.log(this.list)
      
      })
    
    this.listLen=4


 }

  



  

}
