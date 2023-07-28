import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User = null;

  constructor(private userService: UserService) {
    this.userService.getData.subscribe((data) => (this.user = data));
  }

  ngOnInit(): void {}
}
