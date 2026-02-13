import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  imports: [],
  templateUrl: './componente-filho.html',
  styleUrl: './componente-filho.css',
})
export class ComponenteFilho {
  sobrenome = input<string>('');
  mostrarNome = output<string>();

  nome = "";
}
