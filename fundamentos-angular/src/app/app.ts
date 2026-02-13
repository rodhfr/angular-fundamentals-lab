import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component'
import { SecondComponent } from './components/second-component/second-component'
import { PipeCustomizado } from './components/pipe-customizado/pipe-customizado';
import { TwoWayDataBinding } from "./components/two-way-data-binding/two-way-data-binding";
import { RenderizandoListas } from "./components/renderizando-listas/renderizando-listas";
import { ComponentePersonalizado } from "./components/componente-personalizado/componente-personalizado";
import { ComponentePai } from "./components/componente-pai/componente-pai";
import { ExemploServicos1 } from "./components/exemplo-servicos1/exemplo-servicos1";
import { ExemploServicos2 } from "./components/exemplo-servicos2/exemplo-servicos2";
import { CicloDeVidaPai } from "./components/ciclo-de-vida-pai/ciclo-de-vida-pai";
import { Card } from "./components/card/card";

@Component({
  selector: 'app-root',
  imports: [FirstComponent, SecondComponent, PipeCustomizado, TwoWayDataBinding, RenderizandoListas, ComponentePersonalizado, ComponentePai, ExemploServicos1, ExemploServicos2, CicloDeVidaPai, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fundamentos-angular');
}
