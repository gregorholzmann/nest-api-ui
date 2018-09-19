import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Store } from '@ngrx/store'
import * as JobsActions from '../actions/jobs.actions'

import { Job } from '../types/job.interface'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class JobsService {
  constructor(private http: HttpClient, private store: Store<Job[]>) {}

  getJobs() {
    this.http.get<{data: {getJobs: Job[]}}>('http://localhost:3000/graphql?query={getJobs{title,salary}}')
    .subscribe(res => {
      this.store.dispatch(new JobsActions.ReceiveJobsAction(res.data.getJobs))
    })
  }

  addJob(newJob: Job) {
    console.log('jobService', newJob)
    const payload = {
      operationName: null,
      query: `mutation{createJob(title:"${newJob.title}",salary: ${newJob.salary}){salary,title}}`,
      variables: {}
    }
    this.http.post<Job>('http://localhost:3000/graphql', JSON.stringify(payload), httpOptions)
      .subscribe(val => console.log('add job sub', val))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
