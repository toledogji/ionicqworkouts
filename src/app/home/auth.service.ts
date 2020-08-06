import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  constructor(private http: HttpClient) { }

  signIn(){
    let headerOptions: any = { 'Content-Type': 'application/json' };
    let headers = new HttpHeaders(headerOptions);
    
    let body = {
      "username": "toledogji",
      "password": "qworkouts"
    };

     return this.http.post('https://qworkouts.herokuapp.com/api/v1/auth/signin', JSON.stringify(body), {headers: headers})
  }
}
