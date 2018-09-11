import { Job } from '../types/job.interface'
import * as JobsActions from '../actions/jobs.actions'


const initialState = []

export function JobsReducer(state: Job[] = initialState, action: JobsActions.Actions) {
  switch (action.type) {
    case JobsActions.RECEIVE_JOBS:
      console.log(action.jobsArr)
      return [...action.jobsArr]

    default:
      return state
  }
}
