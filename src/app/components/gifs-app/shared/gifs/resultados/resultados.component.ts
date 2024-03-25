import { Component, inject } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [],
  templateUrl: './resultados.component.html',
  styles: ``,
})
export class ResultadosComponent {
  private gifsService = inject(GifsService);

  get resultados() {
    return this.gifsService.resultado;
  }
}
