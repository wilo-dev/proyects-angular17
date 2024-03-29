import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pais-input.component.html',
  styleUrl: './pais-input.component.css',
})
export class PaisInputComponent implements OnInit {
  // TODO: mando info de hijo al padre
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  // TODO: se dispara una sola vez cuando el componente se crea
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  buscarPais() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

  // TODO: mandando el event
  // teclaPresionada(event: KeyboardEvent) {
  //   const valor = (event.target as HTMLInputElement).value;
  //   console.log(valor);
  //   console.log(this.termino);
  // }
}

// TODO: DebounceTime.- es cuando el usuario enpience a escribir aparesca los resultados
//  creamos manualmente el debounceTime
