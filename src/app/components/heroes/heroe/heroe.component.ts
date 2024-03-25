import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [],
  templateUrl: './heroe.component.html',
  styles: ``,
})
export class HeroeComponent {
  name = 'spiderman';
  edad = 34;

  get nombreCapitalizar() {
    return this.name.toUpperCase();
  }

  obtenerNombre() {
    return `${this.name} - ${this.edad}`;
  }

  cambiarNombre() {
    this.name = 'Iroman';
  }

  cambiarEdad() {
    this.edad = 56;
  }
}
