import { Component, OnInit } from '@angular/core';
import { ExercisesService } from './exercises.service';
import { Exercise } from './exercise.model';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  exercises: Exercise[];
  
  constructor(private exercisesService: ExercisesService, private router: Router, public storage: Storage) { }

  ngOnInit() {
    this.exercisesService.getExercises().subscribe( data => {
      console.log(data);
      this.exercises = data;
    })
  }

  ionViewWillEnter(){
    this.exercisesService.getExercises().subscribe( data => {
      console.log(data);
      this.exercises = data;
    })
  }

  addNewPlace() {
    this.router.navigate(['new-exercise']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}
