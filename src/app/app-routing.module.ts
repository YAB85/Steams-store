import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'games', loadChildren: () => import('./games/games.module').then((m) =>m.GamesModule)},
  { path: 'library', loadChildren: () => import('./library/library.module').then((m) =>m.LibraryModule)},
  { path: 'friends', loadChildren: () => import('./friends/friends.module').then((m) =>m.FriendsModule)},
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then((m) =>m.ProfileModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) =>m.LoginModule)},
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
