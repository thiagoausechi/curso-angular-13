import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/user-services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User = null;

  constructor(private userService: UserServices) {}

  ngOnInit(): void {
    this.userService.getData.subscribe((data) => (this.user = data));
  }
}
