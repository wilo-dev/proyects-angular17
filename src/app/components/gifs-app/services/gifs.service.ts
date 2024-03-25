import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Gifs, SearchGifsResponse } from '../interface/gifs.interface';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private httpClient = inject(HttpClient);

  public resultado: Gifs[] = [];

  private apiKey = 'pkAel0VQLjQnd8N5Q6X2584STub8695o';
  private URL = 'https://api.giphy.com/v1/gifs';

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor() {
    this.getHistorialLocalStorage();

    this.getImagenLocalStorage();
  }

  // TODO: get localstorage
  getHistorialLocalStorage() {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  getImagenLocalStorage() {
    this.resultado = JSON.parse(localStorage.getItem('img')!) || [];
  }

  addHistorial(query: string = '') {
    // almacenar en minisculas
    query = query.trim().toLocaleLowerCase();
    // validar si existe palabra
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      // TODO: guardando el historial en el localstorage
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.httpClient
      .get<SearchGifsResponse>(`${this.URL}/search`, { params })
      .subscribe((resp: SearchGifsResponse) => {
        console.log(resp.data);
        this.resultado = resp.data;
        // almacenando la img en el localstorage
        localStorage.setItem('img', JSON.stringify(this.resultado));
      });
  }
}
