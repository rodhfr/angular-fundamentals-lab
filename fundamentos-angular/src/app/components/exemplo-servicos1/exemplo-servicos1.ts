import { Component } from '@angular/core';
import { Logger } from '../../logger';

@Component({
  selector: 'app-exemplo-servicos1',
  imports: [],
  templateUrl: './exemplo-servicos1.html',
  styleUrl: './exemplo-servicos1.css',
})
export class ExemploServicos1 {
  nome = '';
  
  constructor(private logger: Logger){}

  adicionarNome() {
    this.logger.logar(`O nome ${this.nome} foi adicionado`)
  }
}
