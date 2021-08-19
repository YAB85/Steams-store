import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsHomeComponent } from './friends-home/friends-home.component';

const routes: Routes = [
  { path: '', component: FriendsHomeComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }
