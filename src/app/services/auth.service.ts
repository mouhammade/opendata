import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private _isAuth: boolean = false;
	authSubject: Subject<string> = new Subject();
  constructor() {console.log(77) }

  userConnected(): void {
  	this._isAuth = true;
    this.authSubject.next('connected');
  }

  userDisconnect() {
  	return this.authSubject.next('disconnected');
  }
}
