import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'curso-angular-13';

  logged_user: User = {
    name: 'Thiago',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.setData(this.logged_user);
  }
}
