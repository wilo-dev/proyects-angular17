import { Routes } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';
import { HomeDbzComponent } from './components/dbz/home-dbz/home-dbz.component';
import { MainComponent } from './UI/home/main/main.component';
import { MainGifsAppComponent } from './components/gifs-app/main-gifs-app/main-gifs-app.component';
import { AppPaisComponent } from './components/paises-app/container/app-pais/app-pais.component';
import { PorRegionComponent } from './components/paises-app/container/pages/por-region/por-region.component';
import { PorPaisComponent } from './components/paises-app/container/pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './components/paises-app/container/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './components/paises-app/container/pages/ver-pais/ver-pais.component';

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
    path: 'pais-app',
    component: AppPaisComponent,
    title: 'Paise App',
    children: [
      {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full',
      },
      {
        path: 'region',
        component: PorRegionComponent,
        title: 'Región',
      },
      {
        path: 'capital',
        component: PorCapitalComponent,
        title: 'Capital',
      },
      {
        path: 'pais/:id',
        component: VerPaisComponent,
        title: 'Pais por codigo',
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
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
