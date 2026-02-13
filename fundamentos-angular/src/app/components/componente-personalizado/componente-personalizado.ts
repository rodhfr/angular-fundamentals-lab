import { Component, input } from '@angular/core';

@Component({
  selector: 'app-componente-personalizado',
  imports: [],
  templateUrl: './componente-personalizado.html',
  styleUrl: './componente-personalizado.css',
})
export class ComponentePersonalizado {
  nome = input<string>('');
  sobrenome = input<string>('');
}

