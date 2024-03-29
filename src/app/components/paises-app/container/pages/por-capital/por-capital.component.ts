import { Component, inject } from '@angular/core';
import { PaisInputComponent } from '../../components/pais-input/pais-input.component';
import { PaisTablaComponent } from '../../components/pais-tabla/pais-tabla.component';
import { Pais } from '../../../interface/pais.interface';
import { PaisService } from '../../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  standalone: true,
  imports: [PaisTablaComponent, PaisInputComponent],
  templateUrl: './por-capital.component.html',
  styleUrl: './por-capital.component.css',
})
export class PorCapitalComponent {
  titleCapital = 'Por Capital';

  private paisService = inject(PaisService);
  capital: Pais[] = [];

  termino: string = '';
  error = false;

  buscarCapital(word: string) {
    this.error = false;
    this.termino = word;
    this.paisService.buscarCapital(word).subscribe({
      next: (data) => {
        console.log(data);
        this.capital = data;
      },
      error: (e) => {
        this.error = true;
        this.capital = [];
      },
    });
  }
}
