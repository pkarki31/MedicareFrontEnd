
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-createmedicine',
  templateUrl: './createmedicine.component.html',
  styleUrls: ['./createmedicine.component.css']
})
export class CreatemedicineComponent implements OnInit {

  formGroup: FormGroup;  

  constructor(private loginService:LoginServiceService,
    private router :Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    console.log("init form success")
    this.formGroup = new FormGroup({
      
      medicine_name: new FormControl("",[Validators.required]),
      medicine_company: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
      quantity: new FormControl("",[Validators.required]),
      price: new FormControl("",[Validators.required]),
      active: new FormControl("",[Validators.required]) ,
      image: new FormControl("",[Validators.required])      
      
    }); 
    console.log("after init form success")


  }

  selectedFile: File;
  shortLink: string = "";
    loading: boolean = false;
    fileName : string;

    onFileSelected(event) {
    this.selectedFile = event.target.files[0].name;
   // image:this.selectedFile

   this.formGroup
    
    console.log(this.selectedFile)
    if (this.selectedFile) {

      this.fileName = this.selectedFile.name;

      

      // const formData = new FormData();

      // formData.append("thumbnail", file);

      // const upload$ = this.http.post("/api/thumbnail-upload", formData);

      // upload$.subscribe();
  }
}

fileUpload(){
  console.log("on click ...")
  let input = document.createElement('input');
  input.type = 'file';
  
  input.onchange = _ => {
    // you can use this method to get file and perform respective operations
            let files =   Array.from(input.files);
            console.log(files);
        };
  input.click();
}

// OnClick of button Upload
onUpload() {
  //this.loading = !this.loading;
  console.log(this.selectedFile);
  // this.fileUploadService.upload(this.selectedFile).subscribe(
  //     (event: any) => {
  //         if (typeof (event) === 'object') {

  //             // Short link via api response
  //             this.shortLink = event.link;

  //             this.loading = false; // Flag variable 
  //         }
  //     }
  // );
}

uploadFileEvt(event){

}

  loginProcess(){
    console.log("success13")

    
      console.log("sucess 123hi")
      this.loginService.createmedicine(this.formGroup.value).subscribe(result=>{
       
          console.log("sucess 123")
          alert("Medicine  "+result.medicine_name+" created .");
          this.router.navigate(['/adminpage']);
       
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
