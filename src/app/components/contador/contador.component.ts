import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styles: ``,
})
export class ContadorComponent {
  title = 'Contador App';
  inicio = 0;

  base = 5;

  incrementar() {
    this.inicio += 1;
  }

  decrementar() {
    this.inicio -= 1;
  }

  operacion(value: number) {
    this.inicio += value;
  }
}
