import { Action } from '@ngrx/store'
import { Job } from '../types/job.interface'

export const RECEIVE_JOBS = 'RECEIVE_JOBS'
export const GET_JOBS = 'GET_JOBS'
export const GET_JOBS_FAILED = 'GET_JOBS_FAILED'

export class ReceiveJobsAction implements Action {
  readonly type = RECEIVE_JOBS

  constructor(public jobsArr: Job[]) {}
}

export class GetJobsAction implements Action {
  readonly type = GET_JOBS

  constructor() {}
}

export class GetJobsFailedAction implements Action {
  readonly type = GET_JOBS_FAILED

  constructor(public error) {}
}

export type Actions
= ReceiveJobsAction
| GetJobsAction
| GetJobsFailedAction
