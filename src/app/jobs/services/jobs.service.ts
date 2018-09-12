import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store'
import * as JobsActions from '../actions/jobs.actions'

import { Job } from '../types/job.interface'

@Injectable()
export class JobsService {
  constructor(private http: HttpClient, private store: Store<Job[]>) {}

  getJobs() {
    this.http.get<{data: {getJobs: Job[]}}>('http://localhost:3000/graphql?query={getJobs{title,salary}}')
    .subscribe(res => {
      this.store.dispatch(new JobsActions.ReceiveJobsAction(res.data.getJobs))
    })
  }
}
