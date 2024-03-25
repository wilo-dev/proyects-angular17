import { Component, inject } from '@angular/core';
import { ContainerCardService } from '../../services/container-card.service';
import { ContainerCard } from '../../interface/ContainerCard';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  private containerCardService = inject(ContainerCardService);

  get contenidoCards(): ContainerCard[] {
    return this.containerCardService.listCard;
  }
}
