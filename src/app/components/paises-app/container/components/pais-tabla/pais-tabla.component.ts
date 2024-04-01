import { Component, Input } from '@angular/core';
import { Pais } from '../../../interface/pais.interface';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-pais-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pais-tabla.component.html',
  styleUrl: './pais-tabla.component.css',
})
export class PaisTablaComponent {
  @Input() resultados: Pais[] = [];
}
