import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { AdminGuard } from './admin.guard';
import { AdmingHomeComponent } from './adming-home/adming-home.component';
import { UsersComponent } from './users/users.component';
import { XyzComponent } from './xyz/xyz.component';


const routes: Routes = [
  {
    path:"abc", component: AbcComponent
  },
  {
    path:"xyz", component: XyzComponent
  },
  {
    path:"users/:id/:id1", component: UsersComponent
  },
  {
    path:"admin", component : AdmingHomeComponent , canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
