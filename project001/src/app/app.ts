import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dice } from './dice/dice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dice],
  templateUrl: './app.html',
  /*template: `
    <h1 style="text-align:center;">
      Welcome to Angular!
    </h1>`,*/
  styleUrl: './app.css'
  //styles: 'h1{text-align:center;}'
})
export class App {
  // protected readonly title = signal('project001');

  title: string = 'project001_modified';

  name = 'Sam';
  age = 30;

  articles = [
    {code:1, description:'Oranges', price: 1.99},
    {code:2, description:'Bananas', price: 0.99},
    {code:3, description:'Apples', price: 1.49}
  ];

  counter = 1;

  name2 = '';

  setName21(){
    this.name2 = 'John';
  }

  setName22(){
    this.name2 = 'Jane';
  }

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    this.counter--;
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 3) + 1;
  }

}
