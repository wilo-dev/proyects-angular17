import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-app-pais',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app-pais.component.html',
  styleUrl: './app-pais.component.css',
})
export class AppPaisComponent {}
