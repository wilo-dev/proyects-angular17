import { Injectable } from '@angular/core';
import { ListadoMenuBtn } from '../interface/ListadoMenuBtn';

@Injectable({
  providedIn: 'root',
})
export class ListadoMenuBtnService {
  private _listMenuBtn: ListadoMenuBtn[] = [
    {
      id: 1,
      name: 'Contador',
    },
    {
      id: 2,
      name: 'Heroes',
    },
    {
      id: 3,
      name: 'Dragon ball',
    },
    {
      id: 4,
      name: 'Pokemon',
    },
  ];

  get listMenuBtn(): ListadoMenuBtn[] {
    return [...this._listMenuBtn];
  }
}
