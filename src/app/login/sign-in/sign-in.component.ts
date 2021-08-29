import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @Input(`isSignedIn`) isSignedIn: boolean = false;
  
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  onSignin(email: string, password: string){
      this.firebaseService.signin(email, password)
      if (this.firebaseService.isLoggedIn)
        this.isSignedIn = true
    }
}
