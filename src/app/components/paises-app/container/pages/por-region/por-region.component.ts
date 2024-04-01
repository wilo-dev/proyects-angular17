import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PaisService } from '../../../services/pais.service';
import { Pais } from '../../../interface/pais.interface';
import { PaisTablaComponent } from '../../components/pais-tabla/pais-tabla.component';

@Component({
  selector: 'app-por-region',
  standalone: true,
  imports: [TitleCasePipe, NgClass, PaisTablaComponent],
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  private paisService = inject(PaisService);

  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];

    this.paisService.BuscarPorRegion(region).subscribe((pais) => {
      console.log(pais);
      this.paises = pais;
    });
  }
}
