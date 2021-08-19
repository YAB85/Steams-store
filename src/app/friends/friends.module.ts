import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsHomeComponent } from './friends-home/friends-home.component';


@NgModule({
  declarations: [
    FriendsHomeComponent
  ],
  imports: [
    CommonModule,
    FriendsRoutingModule
  ],
  exports: []
})
export class FriendsModule { }
