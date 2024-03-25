import { Component } from '@angular/core';
import { MenuComponent } from '../navbar/menu/menu.component';
import { ContainerComponent } from '../container/container.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenuComponent, ContainerComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
