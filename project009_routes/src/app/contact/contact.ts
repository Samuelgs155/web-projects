import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  data = '';

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  submit() {
    this.data = `Nombre=${this.contactForm.value.name}
                Mail=${this.contactForm.value.email}
                Mensaje=${this.contactForm.value.message}
                `;
  }


}
