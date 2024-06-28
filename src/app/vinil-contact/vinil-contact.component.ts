import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-vinil-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './vinil-contact.component.html',
  styleUrl: './vinil-contact.component.scss',
})
export class VinilContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    })
  }

  async onSubmit() {
    try {
      if (this.contactForm.valid) {
        const response = "Enviado!";
        console.log(response);
      } else {
        console.log("Invalid Form");
        this.contactForm.markAllAsTouched();
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  
}

