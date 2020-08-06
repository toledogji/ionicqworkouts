import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-add',
  templateUrl: './exercise-add.page.html',
  styleUrls: ['./exercise-add.page.scss'],
})
export class ExerciseAddPage implements OnInit {

  constructor(private exercisesService: ExercisesService, private router: Router) { }

  ngOnInit() {
  }

  saveNewExercise(name, difficulty, muscleGroup, equipment, videoLink, thumbnail){
    this.exercisesService.addExercise(name.value, difficulty.value, muscleGroup.value, equipment.value, videoLink.value, thumbnail.value);
    this.router.navigate(['/exercises']);
  }
}
