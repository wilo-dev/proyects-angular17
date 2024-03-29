import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { GifsPageComponent } from '../shared/gifs/gifs-page/gifs-page.component';

@Component({
  selector: 'app-main-gifs-app',
  standalone: true,
  imports: [SidebarComponent, GifsPageComponent],
  templateUrl: './main-gifs-app.component.html',
  styleUrl: './main-gifs-app.component.css',
})
export class MainGifsAppComponent {}
