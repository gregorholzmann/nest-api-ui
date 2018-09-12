import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import { JobsReducer } from './reducers/jobs.reducer'

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './components/jobs.component'

import { JobsService } from './services/jobs.service'

@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    JobsRoutingModule,
    StoreModule.forFeature('jobs', JobsReducer)
  ],
  providers: [
    JobsService
  ]
})
export class JobsModule { }
