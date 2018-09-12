import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store'
import * as UsersActions from '../actions/users.actions'

import { User } from '../types/user.interface'

@Injectable()
export class UsersService {
  constructor(private http: HttpClient, private store: Store<User[]>) {}

  getUsers() {
    this.http.get<{data: {getUsers: User[]}}>('http://localhost:3000/graphql?query={getUsers{name,role}}')
    .subscribe(res => {
      this.store.dispatch(new UsersActions.ReceiveUsersction(res.data.getUsers))
    })
  }
}
