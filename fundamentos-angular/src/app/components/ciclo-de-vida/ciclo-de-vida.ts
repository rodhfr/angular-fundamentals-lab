import { Component, effect, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-ciclo-de-vida',
  imports: [DatePipe],
  templateUrl: './ciclo-de-vida.html',
  styleUrl: './ciclo-de-vida.css',
})

export class CicloDeVida {
  horario = toSignal(interval(100).pipe(map(() => new Date())), { initialValue: new Date() });
  texto = input.required<string>();
  
  constructor(){
    effect(() => {
      console.log('O evento disparou com as seguintes mudancas: ' + this.texto());
    });
  }

}
