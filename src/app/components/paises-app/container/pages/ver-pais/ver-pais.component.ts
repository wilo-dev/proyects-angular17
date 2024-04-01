import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../../interface/pais.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ver-pais',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: 'ver-pais.component.html',
  styleUrl: './ver-pais.component.css',
})
export class VerPaisComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private paisService = inject(PaisService);

  pais: Pais[] = [];

  ngOnInit(): void {
    this.usandoSwitchMap();
    // this.getParams();
  }

  usandoSwitchMap() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorCode(id)),
        tap(console.log)
      )
      .subscribe((resp) => (this.pais = resp));
  }

  // // TODO: obteniendo los params de la URL
  // getParams() {
  //   this.activatedRoute.params.subscribe(({ id }) => {
  //     console.log(id);

  //     this.buscarPorCode(id);
  //   });
  // }

  // buscarPorCode(code: string) {
  //   this.paisService.getPaisPorCode(code).subscribe((resp) => {
  //     console.log(resp);
  // this.pais = pais;
  //   });
  // }
}
