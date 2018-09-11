import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { HttpClient } from '@angular/common/http'
import { Observable, of, defer } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

import * as UsersActions from '../actions/users.actions'
import { User } from '../types/user.interface'
@Injectable()
export class UsersEffects {

  @Effect()
  getData$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActions.GET_USERS),
    mergeMap(action =>
      this.http.get<{data: {getUsers: User[]}}>('http://localhost:3000/graphql?query={getUsers{name,role}}').pipe(
        map(res => {
          return new UsersActions.ReceiveUsersction(res.data.getUsers)
        }),
        catchError(error => of(new UsersActions.GetUsersFailedAction(error)))
      )
    )
  )

  @Effect()
  init$: Observable<Action> = defer(() => {
    return of(new UsersActions.GetUsersAction());
  })

  constructor(private http: HttpClient, private actions$: Actions) {}
}
