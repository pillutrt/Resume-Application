import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Applicant } from '../applicant';
import { Observable } from 'rxjs';


let Applicants: any;
@Injectable({
    providedIn: 'root'
  })

  export class ManagerService {
    
    constructor(private http: HttpClient){

    }

    //GETTING the applicant list from the server
    getApplicants(): Observable<any>{
      return this.http.get<any>("http://localhost:4000/api/applicant");
    }
    

  }

