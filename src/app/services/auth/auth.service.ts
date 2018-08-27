import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggin: boolean = false;

  constructor(private http: HttpClient) { }

  isLoggedIn() {
    return this.userLoggin;
  }
  login(userEmail) {
    let params = new HttpParams().set('email', userEmail);
  	return this.http.get<any[]>(environment.apiUrl + '/users', { params: params })
    .pipe(
      map((response: Response[]) => {
        this.userLoggin = response.length > 0;
        if (!this.userLoggin) {
          throw new Error();
        }
        this.triggerExpiredSession();
        let currentUser = response[0];
        localStorage.setItem("user", JSON.stringify(currentUser));
        return currentUser;
      }),
      catchError(err => throwError('El mail ingresado es incorrecto'))
    );
  }
  logout() {
  	this.userLoggin = false;
  }
  triggerExpiredSession() {
    setTimeout(() => {
      this.logout()
    },  3600 * 1000);
  }
}
