import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Storage } from '@ionic/storage';
import { Router } from "@angular/router";
import { User } from "../auth/user";
import { AuthResponse } from '../auth/auth-response';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  authenticationResponse: AuthResponse;
  constructor( private authService: AuthService, private storage: Storage, private router: Router) {}

  signIn(username, password){

    
    let user: User = {
      username: "toledogji",
      password: "qworkouts"
    }

    this.authService.signIn(user).subscribe( data => {
      console.log(data);
    });
    
  }

}
