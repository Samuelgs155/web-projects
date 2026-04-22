import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numeric-selector',
  imports: [],
  templateUrl: './numeric-selector.html',
  styleUrl: './numeric-selector.css',
})
export class NumericSelector {

  @Input() minimum: number = 1;
  @Input() maximum: number = 1;
  currentValue: number = 1;

  ngOnInit() {
    this.currentValue = this.minimum;
  }

  increaseValue() {
    if (this.currentValue < this.maximum) {
      this.currentValue++;
    }
  }

  decreaseValue() {
    if (this.currentValue > this.minimum) {
      this.currentValue--;
    }
  }

  setValue(value: number) {
    if (value >= this.minimum && value <= this.maximum) {
      this.currentValue = value;
    }
  }

}
