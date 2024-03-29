import { HttpClient } from '@angular/common/http';
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

  // TODO: retorna el pais por nombre
  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.URL}/name/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  buscarCapital(capital: string): Observable<Pais[]> {
    const url = `${this.URL}/capital/${capital}`;
    return this.http.get<Pais[]>(url);
  }
}
