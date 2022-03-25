import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

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
      
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])     
      
    }); 
    console.log("after init form success")

  }

  loginProcess(){
    console.log("success13")

    if(this.formGroup.valid){
      this.loginService.adminlogin(this.formGroup.value).subscribe(result=>{
       //console.log(result.adminIs)
        if(result.userVerified=="User Present "){
          console.log("sucess 123")
          if(result.adminIs){
          this.router.navigate(['/adminpage']);
          }
          else {
            this.router.navigate(['/userpage']);
          }
          
          //alert(result.userVerified);
        }else{
          console.log("sucess 321")
          alert(result.userVerified);
         // this.router.navigate(['/userpage']);
        }
      })
    }
  }

}


