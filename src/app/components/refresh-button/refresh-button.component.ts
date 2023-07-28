import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.css'],
})
export class RefreshButtonComponent implements OnInit {
  isLoading = false;
  hasUser = false;

  constructor(private userService: UserService) {
    this.userService.getData.subscribe((data) => (this.hasUser = !!data));
    this.userService.isLoading.subscribe(
      (loading) => (this.isLoading = loading)
    );
  }

  ngOnInit(): void {}

  refresh(): void {
    this.userService.fetchUser();
  }
}
