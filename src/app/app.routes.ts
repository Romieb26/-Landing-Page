import { Routes } from '@angular/router';
import { CardmemesComponent } from './components/cardmemes/cardmemes.component';
import { HomeComponent } from './components/home/home.component';



export const routes: Routes = [
  {path: 'Memes', component:CardmemesComponent},
  {path: '', component:HomeComponent}
];
