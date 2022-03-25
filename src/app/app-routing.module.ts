import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { SignupuserComponent } from './signupuser/signupuser.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { FinalorderpageComponent } from './finalorderpage/finalorderpage.component';
import { LogoutComponent } from './logout/logout.component';
import { CreatemedicineComponent } from './createmedicine/createmedicine.component';


const routes: Routes = [
  {path:'' , component : LoginComponent},
  { path: 'adminpage', component: AdminpageComponent },
  { path: 'userpage', component: UserpageComponent },
  {path: 'signupuser',component:SignupuserComponent},
  {path: 'aboutus',component:AboutusComponent},
  {path: 'cart',component:CartComponent},
  {path: 'finalorderpage',component:FinalorderpageComponent},
  {path: 'logout',component:LogoutComponent},
  {path: 'createmedicine',component:CreatemedicineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
