import { Component } from '@angular/core';
import { BusquedaComponent } from '../busqueda/busqueda.component';
import { ResultadosComponent } from '../resultados/resultados.component';

@Component({
  selector: 'app-gifs-page',
  standalone: true,
  imports: [BusquedaComponent, ResultadosComponent],
  templateUrl: './gifs-page.component.html',
  styles: ``,
})
export class GifsPageComponent {}
