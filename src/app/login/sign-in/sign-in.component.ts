import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @Input(`isSignedIn`) isSignedIn: boolean = false;
  @Input() onSignin: any;
  constructor() { }

  ngOnInit(): void {
  }

}
