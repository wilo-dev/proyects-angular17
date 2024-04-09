import { Routes } from '@angular/router';
import { PorPaisComponent } from '../container/pages/por-pais/por-pais.component';
import { PorRegionComponent } from '../container/pages/por-region/por-region.component';
import { PorCapitalComponent } from '../container/pages/por-capital/por-capital.component';
import { VerPaisComponent } from '../container/pages/ver-pais/ver-pais.component';

export const PaisApp: Routes = [
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
];
