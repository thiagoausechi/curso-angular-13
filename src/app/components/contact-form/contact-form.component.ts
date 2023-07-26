import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  content: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getData.subscribe(
      (data) => (this.name = data?.name || '')
    );
  }
}
