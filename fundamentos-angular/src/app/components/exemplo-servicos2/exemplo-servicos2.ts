import { Component } from '@angular/core';
import { Logger } from '../../logger';

@Component({
  selector: 'app-exemplo-servicos2',
  imports: [],
  templateUrl: './exemplo-servicos2.html',
  styleUrl: './exemplo-servicos2.css',
})
export class ExemploServicos2 {
  descricao = '';
  
  constructor(public logger: Logger) {}

  adicionarDescricao() {
    this.logger.logar(`o produto com nome ${this.descricao} foi adicionado`);
  }
}
