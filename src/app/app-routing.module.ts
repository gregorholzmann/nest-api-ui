import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'jobs',
    loadChildren: 'src/app/jobs/jobs.module#JobsModule'
  },
  {
    path: 'users',
    loadChildren: 'src/app/users/users.module#UsersModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
