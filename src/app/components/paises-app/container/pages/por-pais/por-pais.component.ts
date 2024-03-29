import { Component, inject } from '@angular/core';
import { PaisService } from '../../../services/pais.service';
import { Pais } from '../../../interface/pais.interface';
import { NgOptimizedImage } from '@angular/common';
import { PaisTablaComponent } from '../../components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from '../../components/pais-input/pais-input.component';

@Component({
  selector: 'app-por-pais',
  standalone: true,
  imports: [NgOptimizedImage, PaisTablaComponent, PaisInputComponent],
  templateUrl: './por-pais.component.html',
  styleUrl: './por-pais.component.css',
})
export class PorPaisComponent {
  private paisService = inject(PaisService);
  public paises: Pais[] = [];

  termino: string = '';
  error = false;

  buscar(word: string) {
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
    this.error = false;
    // TODO: crear sugerencia
  }
}
