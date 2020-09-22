import { Applicant } from '../applicant';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  
  applicant1 = new Applicant('Rohit', 'Pillutla', 'pillutrt@mail.uc.edu','Web Developer');
  applicantlist: Applicant[] = [this.applicant1];

  //url = 'http://localhost:4000/api/applicant'
  constructor(private http: HttpClient) { }

  //Getting the list of applicants from the applicants table from the database
  //getApplicant(): Observable<any> {
    //return this.http.get('http://localhost:4000/api/');
  //}

  //POSTING the applicant details from angular form to the server
  addApplicant(applicant: Applicant) {
    this.applicantlist.push(applicant);
    this.http.post('http://localhost:4000/api/applicant', applicant).subscribe((responsedata: any) => {
      console.log(responsedata);
    });
    return;
  }

  //GETTING the roles/job positions available in the database from the server
  getRoles(): Observable<any> {
    return this.http.get<any>('http://localhost:4000/api/getroles')
  }

}