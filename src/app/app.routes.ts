import { Routes } from '@angular/router';
import { CardmemesComponent } from './components/cardmemes/cardmemes.component';
import { HomeComponent } from './components/home/home.component';
import path from '@angular/core'



export const routes: Routes = [
  {path: '', component : HomeComponent },
  {path: 'meme', component : CardmemesComponent}
];
