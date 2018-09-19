import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { UsersReducer } from './reducers/users.reducer'

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users.component'

import { UsersService } from './services/users.service'

import { UsersEffects } from './effects/users.effects'

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', UsersReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
