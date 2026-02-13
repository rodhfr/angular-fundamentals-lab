import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgStyle],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  titulo = input<string>('');
  cor = input<string>('#ccc');

}
