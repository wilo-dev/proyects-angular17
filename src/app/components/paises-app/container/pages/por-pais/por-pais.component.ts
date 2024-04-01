import { Component, inject } from '@angular/core';
import { PaisService } from '../../../services/pais.service';
import { Pais } from '../../../interface/pais.interface';
import { NgOptimizedImage } from '@angular/common';
import { PaisTablaComponent } from '../../components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from '../../components/pais-input/pais-input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-por-pais',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PaisTablaComponent,
    PaisInputComponent,
    RouterLink,
  ],
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  private paisService = inject(PaisService);
  public paises: Pais[] = [];
  public paisesSugeridos: Pais[] = [];

  mostrarSugerencia: boolean = false;
  termino: string = '';
  error = false;

  buscar(word: string) {
    this.mostrarSugerencia = false;

    this.error = false;
    this.termino = word;
    this.paisService.buscarPais(word).subscribe({
      next: (data) => {
        console.log(data);
        this.paises = data;
      },
      error: (e) => {
        this.error = true;
        this.paises = [];
      },
    });
  }

  sugerencia(termino: string) {
    this.mostrarSugerencia = true;
    this.error = false;
    console.log(termino);
    this.termino = termino;

    if (termino.length == 0) {
      return;
    }

    this.paisService.buscarPais(termino).subscribe({
      next: (paises) => {
        this.paisesSugeridos = paises.slice(0, 5);
      },
      error: (e) => {
        this.paisesSugeridos = [];
      },
    });
  }

  onBuscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
