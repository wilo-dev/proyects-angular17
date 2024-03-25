import { Routes } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';
import { HomeDbzComponent } from './components/dbz/home-dbz/home-dbz.component';
import { MainComponent } from './UI/home/main/main.component';
import { MainGifsAppComponent } from './components/gifs-app/main-gifs-app/main-gifs-app.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    title: 'Dofi',
  },
  {
    path: 'contador',
    component: ContadorComponent,
    title: 'Contador',
  },
  {
    path: 'heroes',
    component: HeroeComponent,
    title: 'Heroes',
  },
  {
    path: 'dbz',
    component: HomeDbzComponent,
    title: 'dbz',
  },
  {
    path: 'gifsapp',
    component: MainGifsAppComponent,
    title: 'Gifs App',
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: MainComponent,
  },
];
