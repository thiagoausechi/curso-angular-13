import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/user-services';

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

  constructor(private userService: UserServices) {}

  ngOnInit(): void {
    this.userService.setData(this.logged_user);
  }
}
