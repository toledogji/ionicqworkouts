import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http: HttpClient, private storage: Storage) { }

  private token: any;
  private exercises: Exercise[]
  
  getExercises() {
    this.storage.get('token').then( (val) => {
      this.token = val;
    });

    let headerOptions: any = { 
      'Content-Type': 'application/json',
      'Authorization': this.token
    };
    let headers = new HttpHeaders(headerOptions);

    console.log(this.token);
    
    return this.http.get<Exercise[]>('https://qworkouts.herokuapp.com/api/v1/exercise', {headers: headers});
  }
  
  getExercise(exerciseId: string) {
      return { 
        ...this.exercises.find(exercise =>{
          return exercise._id === exerciseId 
        })
      }
  }

  addExercise(name: string, difficulty: string, muscle_group: string[], equipment: string [], videoLink: string, thumbnail: string) {
    
    this.exercises.push({
      _id: this.exercises.length + 1 + "",
      name,
      muscle_group,
      equipment,
      difficulty,
      videoLink,
      thumbnail
    });

  }

  deleteExercise(exerciseId: string) {

    this.exercises = this.exercises.filter( exercise => {
      return exercise._id !== exerciseId;
    })

  }


}
