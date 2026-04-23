import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project007_forms_checkbox_radio_select');

  conversion = '';
  poweredNumber = '';
  quantity = '';

  conversionForm = new FormGroup({
    decimalNumber: new FormControl(''),
    base: new FormControl('octal'),
    power: new FormControl('2'),
    length: new FormControl(true)
  });

  submit() {
    if (this.conversionForm.value.decimalNumber) {

      if (this.conversionForm.value.base == "hexadecimal")
        this.conversion = parseInt(this.conversionForm.value.decimalNumber).toString(16);

      if (this.conversionForm.value.base == "octal")
        this.conversion = parseInt(this.conversionForm.value.decimalNumber).toString(8);

      if (this.conversionForm.value.decimalNumber && this.conversionForm.value.power)
        this.poweredNumber =
          Math.pow(
            parseInt(this.conversionForm.value.decimalNumber),
            parseInt(this.conversionForm.value.power)
          ).toString();

      if (this.conversionForm.value.length)
        this.quantity =
          this.conversionForm.value.decimalNumber.length.toString();
    }
  }

}
