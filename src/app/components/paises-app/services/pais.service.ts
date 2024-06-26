import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Pais } from '../interface/pais.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private http = inject(HttpClient);

  public pais: Pais[] = [];

  private URL = 'https://restcountries.com/v3.1';

  get params() {
    return new HttpParams().set('fields', 'name,cca2,flags,population');
  }

  // TODO: retorna el pais por nombre
  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.URL}/name/${termino}`;
    return this.http.get<Pais[]>(url, { params: this.params });
  }

  buscarCapital(capital: string): Observable<Pais[]> {
    const url = `${this.URL}/capital/${capital}`;
    return this.http.get<Pais[]>(url, { params: this.params });
  }

  getPaisPorCode(code: string): Observable<Pais[]> {
    const url = `${this.URL}/alpha/${code}`;
    return this.http.get<Pais[]>(url);
  }

  BuscarPorRegion(region: string): Observable<Pais[]> {
    const url = `${this.URL}/region/${region}`;
    return this.http.get<Pais[]>(url, { params: this.params });
  }
}
