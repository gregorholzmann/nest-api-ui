import { createSelector, createFeatureSelector } from '@ngrx/store'
import { Job } from '../types/job.interface'

export const getJobs = createFeatureSelector<Job[]>(
  'jobs'
)
