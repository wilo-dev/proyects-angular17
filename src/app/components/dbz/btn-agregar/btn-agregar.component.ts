import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Personaje } from '../interface/Personaje';
import { FormsModule } from '@angular/forms';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-btn-agregar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './btn-agregar.component.html',
  styles: ``,
})
export class BtnAgregarComponent {
  private dbzService = inject(DbzService);
  new: Personaje = {
    name: '',
    poder: 0,
  };
  // @Output() onNewPersonaje = new EventEmitter<Personaje>();

  add() {
    // TODO: validamos los campos vacios. no se muestra nada
    if (this.new.name.trim().length == 0) {
      return;
    }
    // this.personajes.push(this.new);
    // this.onNewPersonaje.emit(this.new);
    this.dbzService.addPersonaje(this.new);
    this.new = {
      name: '',
      poder: 0,
    };
  }
}
