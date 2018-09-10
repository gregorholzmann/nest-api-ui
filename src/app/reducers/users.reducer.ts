import { User } from '../types/user.interface'
import * as UsersActions from '../actions/users.actions'


const initialState = []

export function UsersReducer(state: User[] = initialState, action: UsersActions.Actions) {
  switch (action.type) {
    case UsersActions.RECEIVE_USERS:
      return [...action.usersArr]

    default:
      return state
  }
}
