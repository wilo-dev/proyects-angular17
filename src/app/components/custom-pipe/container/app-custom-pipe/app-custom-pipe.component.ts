import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-custom-pipe',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app-custom-pipe.component.html',
  styleUrl: './app-custom-pipe.component.css',
})
export class AppCustomPipeComponent {}
