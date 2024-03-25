import { Injectable } from '@angular/core';
import { Personaje } from '../interface/Personaje';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  private _personajes: Personaje[] = [
    {
      name: 'Goku',
      poder: 150000,
    },
    {
      name: 'Vegeta',
      poder: 250000,
    },
    {
      name: 'Piccolo',
      poder: 150000,
    },
  ];

  // Los objetos son mandados por referencias
  // eso significa q puedes manipular el get
  // [...this._personajes] los 3 puntos se llama operador spread
  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  // new: Personaje = {
  //   name: '',
  //   poder: 0,
  // };

  constructor() {
    console.log('servicio inicializado 🚀');
  }

  addPersonaje(data: Personaje) {
    this._personajes.push(data);
  }
}
