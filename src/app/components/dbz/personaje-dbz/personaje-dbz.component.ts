import { Component, Input, Output, inject } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personaje-dbz',
  standalone: true,
  imports: [],
  templateUrl: './personaje-dbz.component.html',
  styles: '',
})
export class PersonajeDbzComponent {
  // @Input('data') personajes: Personaje[] = [];

  private dbzService = inject(DbzService);

  get personajes() {
    return this.dbzService.personajes;
  }
}
