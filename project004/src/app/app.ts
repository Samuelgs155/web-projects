import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumericSelector } from './numeric-selector/numeric-selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NumericSelector],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project004');

  @ViewChild('selector1') selector1!: NumericSelector;
  @ViewChild('selector2') selector2!: NumericSelector;

  setSelector1Value(value: number) {
    this.selector1.setValue(value);
  }

  setSelector2Value(value: number) {
    this.selector2.setValue(value);
  }

}
