import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [],
  templateUrl: './busqueda.component.html',
  styles: ``,
})
export class BusquedaComponent {
  private gifsService = inject(GifsService);
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    const word = this.txtBuscar.nativeElement.value;
    if (word.trim().length === 0) {
      return;
    }
    this.gifsService.addHistorial(word);
    this.txtBuscar.nativeElement.value = '';
    // document.querySelector('input')!.value = '';
  }
}
