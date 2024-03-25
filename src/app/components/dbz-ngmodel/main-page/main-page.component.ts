import { Component } from '@angular/core';
import { Personaje } from '../../dbz/interface/Personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: ``,
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      name: 'Goku',
      poder: 150000,
    },
    {
      name: 'Vegeta',
      poder: 250000,
    },
  ];

  new: Personaje = {
    name: '',
    poder: 0,
  };

  add() {
    // TODO: validamos los campos vacios. no se muestra nada
    if (this.new.name.trim().length == 0) {
      return;
    }
    this.personajes.push(this.new);
    this.new = {
      name: '',
      poder: 0,
    };
    console.log(this.new);
  }

  cambiarName(e: Event) {
    console.log(e);
  }

  // Usando el evento submit
  // add(e: SubmitEvent) {
  //   e.preventDefault();
  //   console.log('Hey');
  // }
}
