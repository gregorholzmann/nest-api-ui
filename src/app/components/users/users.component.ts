import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { User } from '../../types/user.interface'
import * as usersSelectors from '../../selectors/users.selectors'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>

  constructor(private store: Store<User[]>) { }

  ngOnInit() {
    this.users$ = this.store.pipe(select(usersSelectors.getUsers))
  }

}
