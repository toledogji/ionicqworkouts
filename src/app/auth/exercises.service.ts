import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { Exercise } from  './Exercise';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  API_ADDRESS:  string  =  'https://qworkouts.herokuapp.com/api/v1/exercise/';
  authSubject  =  new  BehaviorSubject(false);
  token: string;

  constructor(private httpClient: HttpClient, private storage: Storage) { }
  
  getExercises(): Observable<Exercise[]> {
    this.storage.get('token').then( async (val) => {
      await (this.token = val);
    });

    let headerOptions: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });

    return this.httpClient.get(`${this.API_ADDRESS}`, {headers: headerOptions}).pipe(
      tap(async (res: Exercise[]) => {

        if (res) {
          this.authSubject.next(true);
        }
      })
    );
  }

  getExercise(exerciseId: string): Observable<Exercise> {
    this.storage.get('token').then( async (val) => {
      await (this.token = val);
    });

    let headerOptions: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });

    return this.httpClient.get(`${this.API_ADDRESS}`+ exerciseId, {headers: headerOptions}).pipe(
      tap(async (res: Exercise) => {

        if (res) {
          this.authSubject.next(true);
        }
      })
    );
  }

}
