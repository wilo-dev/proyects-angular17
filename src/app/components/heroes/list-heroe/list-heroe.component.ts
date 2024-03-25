import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-heroe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-heroe.component.html',
  styles: ``,
})
export class ListHeroeComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Batman', 'Superman'];
  heroesBorrados: string[] = [];
  heroesVacios: boolean = false;
  nuevoHeroe: string = '';

  borrarHeroe() {
    const heroeBorrado = this.heroes.shift();
    this.heroesBorrados.push(heroeBorrado!);
    this.heroesVacios = this.heroes.length === 0;
    console.log('hola perro');
  }

  agregarHeroe() {
    if (this.nuevoHeroe.trim() !== '') {
      this.heroes.push(this.nuevoHeroe);
      this.nuevoHeroe = '';
    }
  }
}
