import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dice } from './dice/dice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project002');

  value1: number = this.generateRandomValue();
  value2: number = this.generateRandomValue();
  value3: number = this.generateRandomValue();
  result: string = '';


  generateRandomValue(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  throwTheDice() {
    this.value1 = this.generateRandomValue();
    this.value2 = this.generateRandomValue();
    this.value3 = this.generateRandomValue();
    if (this.value1 == this.value2 && this.value1 == this.value3)
      this.result = 'You win!!';
    else
      this.result = 'You lose!!';
  }

}
