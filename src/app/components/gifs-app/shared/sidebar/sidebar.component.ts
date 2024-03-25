import { Component, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  private gifsService = inject(GifsService);

  get historiales() {
    return this.gifsService.historial;
  }

  buscar(query: string) {
    this.gifsService.addHistorial(query);
  }
}
