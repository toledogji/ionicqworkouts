import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../../auth/exercises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Exercise } from '../exercise.model';
import { LoadingService } from '../../loading-service/loading.service';
@Component({
  selector: 'app-exercise-info',
  templateUrl: './exercise-info.page.html',
  styleUrls: ['./exercise-info.page.scss'],
})
export class ExerciseInfoPage implements OnInit {

  exercise: Exercise;
  isLoading:boolean = false;

  constructor(private activatedRoute: ActivatedRoute, 
              private exercisesService: ExercisesService,
              private router: Router,
              private alertController: AlertController,
              public loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.present();
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //Redirect
      const recipeId = paramMap.get('exerciseId');
      this.exercisesService.getExercise(recipeId).subscribe( data => {
        this.exercise = data;
        console.log(this.exercise.thumbnail);
        this.loadingService.dismiss();
      })
    })
  }

}
