import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.css'],
})
export class RefreshButtonComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  refresh(): void {
    console.log('Irá fazer outra requisição de Usuário');
    this.userService.fetchUser();
  }
}
