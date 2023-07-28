import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  submitted: boolean = false;

  constructor(private userService: UserService) {
    this.userService.getData.subscribe((data) => {
      if (!data) return;

      this.contactForm.controls['name'].setValue(data.name);
      this.contactForm.controls['email'].setValue(data.email);
    });
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      content: new FormControl('', Validators.required),
    });
  }

  submit() {
    // Just visually sinalize that everything is corret
    if (!this.contactForm.invalid) this.submitted = true;
  }

  get name() { return this.contactForm.get('name') } // prettier-ignore
  get email() { return this.contactForm.get('email') } // prettier-ignore
  get content() { return this.contactForm.get('content') } // prettier-ignore
}
