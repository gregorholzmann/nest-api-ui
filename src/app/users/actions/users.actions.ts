import { Action } from '@ngrx/store'
import { User } from '../types/user.interface'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const GET_USERS = 'GET_USERS'
export const GET_USERS_FAILED = 'GET_USERS_FAILED'

export class ReceiveUsersction implements Action {
  readonly type = RECEIVE_USERS

  constructor(public usersArr: User[]) {}
}

export class GetUsersAction implements Action {
  readonly type = GET_USERS

  constructor() {}
}

export class GetUsersFailedAction implements Action {
  readonly type = GET_USERS_FAILED

  constructor(public error) {}
}

export type Actions
= ReceiveUsersction
| GetUsersAction
| GetUsersFailedAction
