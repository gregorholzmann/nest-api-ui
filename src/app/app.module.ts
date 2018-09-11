import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'

import { environment } from '../environments/environment'

import { JobsReducer } from './reducers/jobs.reducer'
import { UsersReducer} from './reducers/users.reducer'

import { JobsEffects } from './effects/jobs.effects'
import { UsersEffects } from './effects/users.effects'

import { AppComponent } from './app.component'
import { JobsComponent } from './components/jobs/jobs.component'
import { UsersComponent } from './components/users/users.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'jobs', component: JobsComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    StoreModule.forRoot({jobs: JobsReducer, users: UsersReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([JobsEffects, UsersEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
