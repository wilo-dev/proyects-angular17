import { Component, Input, inject } from '@angular/core';
import { Personaje } from '../interface/Personaje';
import { PersonajeDbzComponent } from '../personaje-dbz/personaje-dbz.component';
import { BtnAgregarComponent } from '../btn-agregar/btn-agregar.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-home-dbz',
  standalone: true,
  imports: [PersonajeDbzComponent, BtnAgregarComponent],
  templateUrl: './home-dbz.component.html',
  styleUrl: './home-dbz.component.css',
})
export class HomeDbzComponent {
  private dbzService = inject(DbzService);

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes
  // }

  // addPersonaje(e: Personaje) {
  //   // debugger;
  //   this.personajes.push(e);
  // }

  constructor() {
    this.dbzService;
  }
}
