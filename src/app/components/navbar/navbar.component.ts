import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	connected: boolean;
  constructor(private authService: AuthService,private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  	this.authService.authSubject.subscribe(auth => {
  		console.log(auth, 'subject')
  		if(auth ==='connected')
  			this.connected = true;
  		else {
  			this.connected = false;
  		}
  	});
  }

  logOut() {
  	this.afAuth.auth.signOut();
  	this.authService.userDisconnect();
  	this.router.navigate(['se-connecter']);
  }

}
