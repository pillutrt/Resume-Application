import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Applicant } from "../applicant"
import { Observable, Subscriber, Subject } from 'rxjs';
import { ManagerService } from './manager.service';
import { getLocaleDateFormat } from '@angular/common';


//let managers = [{emAil: 'pvs.rohit@gmail.com', passWord: 'pvs@rohit'}];

@Component({
  selector: 'manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  loggedin = false;
  applicantsList: Applicant[] = []
  applicant:Array<any>;
    
  constructor(private http: HttpClient, private managerservice: ManagerService ){ 

    
  }

  //Get applicant list to display it in the table
  ngOnInit(){
      this.managerservice.getApplicants().subscribe((data) =>{
        console.log(data);
        this.applicantsList = data
      })
    }
  

  //Hardcoded authentication of the managers.
  loginUser(event, managerForm: NgForm){

    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#emAil').value
    const password = target.querySelector('#passWord').value

    if (email == "pillutrt" && password == "password"){
      console.log("Login Successful");
      alert('Login Successful');
      this.loggedin = true; 
      managerForm.reset();


    }
    else{
      console.log("Login failed");
      alert('Username and Password do not match');
      managerForm.reset();
    }
    
  }


  
  

}
