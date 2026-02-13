import { Component } from '@angular/core';
import { MultiplicaPorPipe } from '../../../pipes/multiplica-por-pipe';

@Component({
  selector: 'app-pipe-customizado',
  imports: [MultiplicaPorPipe],
  templateUrl: './pipe-customizado.html',
  styleUrl: './pipe-customizado.css',
})
export class PipeCustomizado {

}
