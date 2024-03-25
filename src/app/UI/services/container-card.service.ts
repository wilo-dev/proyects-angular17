import { Injectable } from '@angular/core';
import { ContainerCard } from '../interface/ContainerCard';

@Injectable({
  providedIn: 'root',
})
export class ContainerCardService {
  private _listCard: ContainerCard[] = [
    {
      id: 1,
      title: 'Contador',
      contenido:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imgPath: 'assets/images/card/prueba.webp',
      pagePath: '/contador',
    },
    {
      id: 2,
      title: 'Heroes',
      contenido:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imgPath: 'assets/images/card/prueba.webp',
      pagePath: '/heroes',
    },
    {
      id: 3,
      title: 'Dragon ball',
      contenido:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imgPath: 'assets/images/card/prueba.webp',
      pagePath: '/dbz',
    },
    {
      id: 4,
      title: 'Gifs app',
      contenido:
        'En esta seccion se utiliza lo sigueinte: @viewChild, peticion HTTP, localStorage, cargar Imagen automaticamente, HttpParams, consumiendo API ',
      imgPath: 'assets/images/card/gifs-app.png',
      pagePath: '/gifsapp',
    },
    {
      id: 5,
      title: 'Por definir',
      contenido:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imgPath: 'assets/images/card/prueba.webp',
      pagePath: '#',
    },
    {
      id: 6,
      title: 'Por definir',
      contenido:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imgPath: 'assets/images/card/prueba.webp',
      pagePath: '#',
    },
    {
      id: 7,
      title: 'Por definir',
      contenido:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imgPath: 'assets/images/card/prueba.webp',
      pagePath: '#',
    },
    {
      id: 8,
      title: 'Por definir',
      contenido:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imgPath: 'assets/images/card/prueba.webp',
      pagePath: '#',
    },
    {
      id: 9,
      title: 'Por definir',
      contenido:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      imgPath: 'assets/images/card/prueba.webp',
      pagePath: '#',
    },
  ];

  get listCard(): ContainerCard[] {
    return [...this._listCard];
  }
}
