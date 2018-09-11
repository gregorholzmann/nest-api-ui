import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { HttpClient } from '@angular/common/http'
import { Observable, of, defer } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

import * as JobsActions from '../actions/jobs.actions'
import { Job } from '../types/job.interface'
@Injectable()
export class JobsEffects {

  @Effect()
  getData$: Observable<Action> = this.actions$.pipe(
    ofType(JobsActions.GET_JOBS),
    mergeMap(action =>
      this.http.get<{data: {getJobs: Job[]}}>('http://localhost:3000/graphql?query={getJobs{title,salary}}').pipe(
        map(res => {
          return new JobsActions.ReceiveJobsAction(res.data.getJobs)
        }),
        catchError(error => of(new JobsActions.GetJobsFailedAction(error)))
      )
    )
  )

  @Effect()
  init$: Observable<Action> = defer(() => {
    return of(new JobsActions.GetJobsAction());
  })

  constructor(private http: HttpClient, private actions$: Actions) {}
}
