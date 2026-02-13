import { Component } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common'

@Component({
  selector: 'app-second-component',
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './second-component.html',
  styleUrl: './second-component.css',
})
export class SecondComponent {
  nome = "Rodolfo";
  dataNascimento = "1995-01-01";
  urlImagem="assets/gnome.jpg";

  mostrarDataNascimento() {
    alert(`a data de nascimento do gnome e: ${this.dataNascimento}`)
  }
}
