import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { listenerCount } from 'events';
import { FormControl, FormGroup } from '@angular/forms';







export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface MedicineElement {
    m_id : number;
    medicine_name : string;
    medicine_company : string;
    description : string;
    quantity : number;
    price : number;
    active : string;
    image : string;
    
}




const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];




@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements AfterViewInit {

   medicineElement =[];  
   enableEdit = false;
  enableEditIndex = null;
   entries: any ;
   searchText;

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['m_id', 'medicine_name', 'medicine_company', 'description','quantity','price','active','image'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  
  dataSource = new MatTableDataSource<MedicineElement>(this.medicineElement);
  formGroup: any;

 
  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log("i .. "+i);
    console.log("e .. "+e);
    
  }

  list : MedicineElement[];
  
  // displayedColumns: string[] = ['m_id', 'medicine_name', 'medicine_company', 'description','quantity','price','active','image'];
  // const ELEMENT_DATA1: MedicineElement[]=this.list ;
  
  // dataSource = new MatTableDataSource<MedicineElement>(this.ELEMENT_DATA1);
  

  constructor(private loginService:LoginServiceService) { }

 // @ViewChild(MatPaginator) paginator: MatPaginator;

  saveSegment(list1,i){

    console.log(" what i am updating before update ")
    console.log(list1)

    console.log("i before : "+i)

    this.loginService.sendUpdateMedicineByIdRequest(list1).subscribe((data:MedicineElement[])=>{

      console.log("What response i got : ")
      console.log(data)
        
      //this.list=data;
       const entries = Object.entries(data);
      //this.list=Object.values(data);
    
      

     //console.log("len : "+entries.length)

      console.log("What i converted to obj :")
      console.log(entries)

      this.list["m_id"] = entries[0];
      this.list["medicine_name"] = entries[1];
      this.list["medicine_company"] = entries[2];
      this.list["description"] = entries[3];
      this.list["quantity"] = entries[4];
      this.list["price"] = entries[5];
      this.list["active"] = entries[6];
      this.list["image"] = entries[7];     

      //console.log(" after  update ") 

     console.log("What we have in list : ") 
      console.log(this.list)

      console.log("i after : "+i)

      this.enableEdit = false;
      this.enableEditIndex = i;

     
      
      })
    

  };
  

  onClickSubmit(data) {
    
    console.log("sezarch with : "+data.searchText)

    this.loginService.searchMedicineRequest(data.searchText).subscribe((data:any[])=>{
     
     this.list=data;
     
     console.log("Length of all row"+this.list.length)
       console.log("loading ...onClickSubmit")
      // console.log(data);
      console.log(this.list);
 
       //this.medList = data;
       //some : MedicineElement[] = data;  
     })


 }

  deleteSegment(list1,i){

    console.log(" what i am updating before update ")
    console.log(list1)

    console.log("i before : "+i)

    this.loginService.sendDeleteMedicineByIdRequest(list1).subscribe((data:any)=>{

      if(data =1){

        alert("Medicine  "+list1.medicine_name+" deleted successfully  .");

        this.loginService.sendGetMedicineRequest().subscribe((data:any[])=>{
          // data = JSON.parse(data);
         this.list=data;
         // this.list.forEach(MedicineElement=>{
         //   MedicineElement['isEdit']=false;
         // }
     
         // )
         console.log("Length of all row"+this.list.length)
           console.log("loading ...")
          // console.log(data);
          console.log(this.list);
     
           //this.medList = data;
           //some : MedicineElement[] = data;  
         })

      }

      

     
      
      })
    

  };

  // enableED = false; 
  //   onRowClick(row: MedicineElement):void{
  //       this.enableED = true;
  //     }

      getMedicineById(list){       
        

        console.log("hi from getMedicineById")

        console.log("index : "+list.medicine_name)

        this.loginService.sendGetMedicineByIdRequest(list).subscribe((data:any[])=>{
        
         this.list=data;
         //this.list=Object.values(data);
         console.log(data) 
         console.log(list)
        
         
         })
        
      }
  
  

  ngAfterViewInit() {

    console.log("hi.."+this.medicineElement)
   // this.dataSource.paginator = this.paginator;
    console.log("jhi1")
  //  this.getJSON();
    this.loginService.sendGetMedicineRequest().subscribe((data:any[])=>{
     // data = JSON.parse(data);
    this.list=data;
    // this.list.forEach(MedicineElement=>{
    //   MedicineElement['isEdit']=false;
    // }

    // )
    console.log("Length of all row"+this.list.length)
      console.log("loading ...")
     // console.log(data);
     console.log(this.list);

      //this.medList = data;
      //some : MedicineElement[] = data;  
    })

   

    //this.loginService.sendGetMedicineRequest().map((response:any) => response.json());

    // this.getlist = this.loginService.sendGetMedicineRequest().subscribe(data);

   // console.log(getlist.forEach.toString)
    
  }
      
  }

  

  //constructor(private _liveAnnouncer: LiveAnnouncer) {}

  
  

 

 



 

  //@ViewChild(MatSort) sort: MatSort;

 

  
  
 

  

 




