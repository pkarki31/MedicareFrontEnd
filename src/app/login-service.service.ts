import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrls } from 'src/environments/environment';
import { MedicineElement } from './adminpage/adminpage.component';


@Injectable({
  providedIn: 'root'
})



export class LoginServiceService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  
  

  constructor(private http: HttpClient) { }
    adminlogin(data):Observable<any>{
      console.log("inside")
        return this.http.post<any>(`${baseUrls}/isAdmin`,data);    
      
    }

    createuser(data):Observable<any>{
      console.log("inside")
        return this.http.post<any>(`${baseUrls}/createUser`,data);    
      
    }

    createmedicine(data):Observable<any>{
      console.log("inside createmedicine")
        return this.http.post<any>(`${baseUrls}/createMedicine`,data);    
      
    }

    public sendGetMedicineRequest(){
      console.log("inside sendGetMedicineRequest")
      return this.http.get(`${baseUrls}/getAllMedicine`,this.httpOptions);

     
    
    }

   

    searchMedicineRequest(data):Observable<any>{
      console.log("inside searchMedicineRequest")
        return this.http.post<any>(`${baseUrls}/searchMedicine?searchText=`+data,this.httpOptions);    
      
    }

    public getActiveMedicineRequest(){
      console.log("inside sendGetMedicineRequest")
      return this.http.get(`${baseUrls}/getAllActiveMedicine`,this.httpOptions);

     
    
    }

    

    sendGetMedicineByIdRequest(data):Observable<any>{
      console.log("inside sendGetMedicineByIdRequest")
        return this.http.post<any>(`${baseUrls}/searchMedicineById`,data,this.httpOptions);    
      
    }

    sendUpdateMedicineByIdRequest(data):Observable<MedicineElement[]>{
      console.log("What about to send in update ")
      console.log(data)
        return this.http.post<MedicineElement[]>(`${baseUrls}/updateMedicine`,data,this.httpOptions);    
      
    }

    sendDeleteMedicineByIdRequest(data):Observable<MedicineElement[]>{
      console.log("What about to send in delete ")
      console.log(data)
        return this.http.post<MedicineElement[]>(`${baseUrls}/deleteMedicineById`,data,this.httpOptions);    
      
    }

    

   

  
}




