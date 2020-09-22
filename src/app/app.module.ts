import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login_nav.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ManagerComponent } from './manager/manager.component';
import { HomeComponent } from './home/home.component';
import { ApplicantService } from './applicant/applicant.service';


@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    ApplicantComponent,
    NavbarComponent,
    ManagerComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [ApplicantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
