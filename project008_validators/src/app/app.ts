import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project008_validators');

   result = '';

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(500)
    ])
  });

  submit() {
    if (this.contactForm.valid)
      this.result = "All data is valid";
    else
      this.result = "There is invalid data in the form";
  }
}
