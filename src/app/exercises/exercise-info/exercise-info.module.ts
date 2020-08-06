import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseInfoPageRoutingModule } from './exercise-info-routing.module';

import { ExerciseInfoPage } from './exercise-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseInfoPageRoutingModule
  ],
  declarations: [ExerciseInfoPage]
})
export class ExerciseInfoPageModule {}
