import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { AuthResponse } from  './auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER_ADDRESS:  string  =  'https://qworkouts.herokuapp.com/api/v1/auth';
  authSubject  =  new  BehaviorSubject(false);

  constructor(private httpClient: HttpClient, private storage: Storage) { }
  
  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/signup`, user).pipe(
      tap(async (res:  AuthResponse ) => {

        if (res.user) {
          this.authSubject.next(true);
        }
      })

    );
  }

  
  signIn(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/signin`, user).pipe(
      tap(async (res: AuthResponse) => {

        if (res.user) {
          await this.storage.set("ACCESS_TOKEN", res.token);
          this.authSubject.next(true);
        }
      })
    );
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }
}
