import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsHomeComponent } from './friends-home/friends-home.component';
import { FriendComponent } from './friend/friend.component';


@NgModule({
  declarations: [
    FriendsHomeComponent,
    FriendComponent
  ],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class FriendsModule { }
