import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor( private authService: AuthService, private storage: Storage, private router: Router) {}

  signIn(){
    this.authService.signIn().subscribe( data => {
      this.storage.set('token', data['token']);
      this.storage.set('user', data['user']);
      console.log("User logged in successful!");
    });
    
  }

}
