import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ManagerComponent } from './manager/manager.component';
import { HomeComponent } from './home/home.component'; 

const routes: Routes = [
  { 
    path:'', 
    component: HomeComponent 
  },

  { 
    path:'applicant', 
    component: ApplicantComponent
  },

  { 
    path:'manager', 
    component: ManagerComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
