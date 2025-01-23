import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    {path:'Inicio', component: HomeComponent},
    {path:'', redirectTo:'Inicio',  pathMatch: 'full'}
];
