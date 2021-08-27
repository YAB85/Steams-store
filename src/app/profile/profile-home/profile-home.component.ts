import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {
  users = [
    { name: `Jonatan`, email: `test@test.com`, age: 23}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
