import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  imports: [],
  templateUrl: './dice.html',
  styleUrl: './dice.css',
})
export class Dice {
  value: number = Math.floor(Math.random() * 6) + 1;

}
