import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  @Input(`users`) users: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
