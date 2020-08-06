import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'exercises',
    children: [
      {
        path: "",
        loadChildren: () => import('./exercises/exercises.module').then( m => m.ExercisesPageModule)
      },
      {
        path: ":exerciseId",
        loadChildren: () => import('./exercises/exercise-info/exercise-info.module').then( m => m.ExerciseInfoPageModule)
      }
    ],
  },
  {
    path: 'new-exercise',
    loadChildren: () => import('./exercises/exercise-add/exercise-add.module').then( m => m.ExerciseAddPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
