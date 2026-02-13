import { Component } from '@angular/core';
import { Celular } from '../../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  imports: [],
  templateUrl: './renderizando-listas.html',
  styleUrl: './renderizando-listas.css',
})
export class RenderizandoListas {
  celulares: Celular[] = [
    { id: 1, nome: "Celular XL", descricao: "um celular grande", esgotado: false},
    { id: 2, nome: "Celular Normal", esgotado: false},
    { id: 3, nome: "Celular Mini", descricao: "um celular pequeno", esgotado: true}
  ]

}
