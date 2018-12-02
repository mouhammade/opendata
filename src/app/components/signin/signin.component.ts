import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure} from 'firebaseui-angular';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

	constructor(private afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

	ngOnInit() {
		this.afAuth.authState.subscribe(this.firebaseAuthChangeListener);
	}

	firebaseAuthChangeListener(response) {
	// if needed, do a redirect in here
		if (response) {
		  console.log('Logged in :)');
		} else {
		  console.log('Logged out :(');
		}
	}

	successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
		this.authService.userConnected();
		this.router.navigate(['profile']);
	}

	errorCallback(errorData: FirebaseUISignInFailure) {}  

}
