import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-home',
  templateUrl: './friends-home.component.html',
  styleUrls: ['./friends-home.component.scss']
})
export class FriendsHomeComponent implements OnInit {
  users = [
    { image: '../assets/images/unnamed.png', name: 'John', surname: 'Smith' },
    { image: '../assets/images/unnamed.png', name: 'Adam', surname: 'Sender' },
    { image: '../assets/images/unnamed.png', name: 'Alan', surname: 'Aranovsky'},
    { image: '../assets/images/unnamed.png', name: 'Lucy', surname: 'Luu' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
