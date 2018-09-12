import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { Job } from '../types/job.interface'
import * as jobSelectors from '../selectors/jobs.selectors'
import { JobsService } from '../services/jobs.service'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobs$: Observable<Job[]>
  jobTitle: string
  jobSalary: number
  constructor(private store: Store<Job[]>, private jobService: JobsService) { }

  ngOnInit() {
    this.jobService.getJobs()
    this.jobs$ = this.store.pipe(select(jobSelectors.getJobs))
  }

  addJob() {
    console.log('submitted', this.jobTitle, this.jobSalary)
  }
}
