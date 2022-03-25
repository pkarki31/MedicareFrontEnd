import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.css']
})
export class SignupuserComponent implements OnInit {

  formGroup: FormGroup;  

  constructor(private loginService:LoginServiceService,
    private router :Router) { }

    ngOnInit(){
      console.log("success11")
        this.initForm();
        console.log("success12")
    }

    initForm(){
      console.log("init form success")
      this.formGroup = new FormGroup({
        
        first_name: new FormControl("",[Validators.required]),
        last_name: new FormControl("",[Validators.required]),
        username: new FormControl("",[Validators.required]),
        password: new FormControl("",[Validators.required]),
        address1: new FormControl("",[Validators.required]),
        address2: new FormControl("",[Validators.required]) ,
        state: new FormControl("",[Validators.required]),
        pincode: new FormControl("",[Validators.required]),
        phonenumber: new FormControl("",[Validators.required]),
        isadmin: new FormControl("",[Validators.required])       
        
      }); 
      console.log("after init form success")
  
    }

    loginProcess(){
      console.log("success13")
  
      
        console.log("sucess 123hi")
        this.loginService.createuser(this.formGroup.value).subscribe(result=>{
         
            console.log("sucess 123")
            alert("Welcome "+result.first_name+" "+result.last_name);
            this.router.navigate(['']);
         
        })
      
    }

    numberOnly(event): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        alert("Enter only Number in this field ");
        return false;
      }
      return true;
  
    }

}
