import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { SignupuserComponent } from './signupuser/signupuser.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserpageComponent } from './userpage/userpage.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import {MatListModule} from '@angular/material/list';
import { FinalorderpageComponent } from './finalorderpage/finalorderpage.component';
import { LogoutComponent } from './logout/logout.component';
import { CreatemedicineComponent } from './createmedicine/createmedicine.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';



export class medList {
  constructor(
    public  m_id : number,
    public  medicine_name : string,
    public  medicine_company : string,
    public  description : number,
    public  quantity : number,
    public  price : number,
    public  active : string,
    public  image : string,){}


}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminpageComponent,
    SignupuserComponent,
    UserpageComponent,
    AboutusComponent,
    CartComponent,
    FinalorderpageComponent,
    LogoutComponent,
    CreatemedicineComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatTabsModule,
    MatListModule,
    MatSelectModule,
    MatIconModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


