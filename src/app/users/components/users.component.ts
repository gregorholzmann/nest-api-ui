import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { User } from '../types/user.interface'
import * as usersSelectors from '../selectors/users.selectors'
import { UsersService} from '../services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>
  userName: string
  userRole: string

  constructor(private store: Store<User[]>, private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
    this.users$ = this.store.pipe(select(usersSelectors.getUsers))
  }

  addUser() {
    console.log('added new user', this.userName, this.userRole)
  }
}
