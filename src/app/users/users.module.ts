import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import { UsersReducer } from './reducers/users.reducer'

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users.component'

import { UsersService } from './services/users.service'

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', UsersReducer)
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
