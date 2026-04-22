import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [],
  templateUrl: './stopwatch.html',
  styleUrl: './stopwatch.css',
})
export class Stopwatch {

  second = 0;
  @Input() init: number = 0;
  @Output() multiply10 = new EventEmitter<number>();

  ngOnInit() {
    this.second = this.init;
    setInterval(() => {
      this.second++;
      if (this.second % 10 == 0)
        this.multiply10.emit(this.second);
    }, 1000);
  }

}
