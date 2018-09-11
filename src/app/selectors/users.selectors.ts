import { createSelector, createFeatureSelector } from '@ngrx/store'
import { User } from '../types/user.interface'

export const getUsers = createFeatureSelector<User[]>(
  'users'
)
