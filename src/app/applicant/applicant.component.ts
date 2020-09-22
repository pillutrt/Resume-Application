import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant/applicant.service';
import { Jobs } from '../jobs'
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})

export class ApplicantComponent implements OnInit {
  //submitmessage = '';
  jobs: Jobs[]= []
  appModel = new Applicant(" "," "," "," ")
  constructor(private applicantService: ApplicantService) {
  }

  //Adding the applicants details to the database.
  saveApplicant(appForm: NgForm): void{
    
    console.log(this.appModel);
    const applicant: Applicant = {
      firstName: appForm.value.firstName,
      lastName: appForm.value.lastName,
      eMail: appForm.value.eMail,
      position: appForm.value.position,
      
    };
    this.applicantService.addApplicant(applicant);
    appForm.reset();
  }


  //Fetching the roles/job positions available in the database
  ngOnInit(){
    this.applicantService.getRoles().subscribe((data)=> {
      console.log(data);
      this.jobs = data;
    })
  }
 
  
}
