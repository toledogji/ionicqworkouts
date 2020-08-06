import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-exercise-info',
  templateUrl: './exercise-info.page.html',
  styleUrls: ['./exercise-info.page.scss'],
})
export class ExerciseInfoPage implements OnInit {

  exercise: Exercise; 

  constructor(private activatedRoute: ActivatedRoute, 
              private exercisesService: ExercisesService,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //Redirect
      const recipeId = paramMap.get('exerciseId');
      this.exercise = this.exercisesService.getExercise(recipeId);
    })
  }

  async deleteExercise(){ 
    const alertElement = await this.alertController.create({
      header: 'Are you sure?',
      message: 'Exercise will be deleted permanently',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.exercisesService.deleteExercise(this.exercise._id);
            this.router.navigate(['/exercises']);
          }
        }
      ]
    });
    await alertElement.present();
  }

}
