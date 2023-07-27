import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  user: User = null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userID = this.route.snapshot.paramMap.get('id') || '0';
    this.userService
      .getUserByID(userID)
      .subscribe((data) => (data && 'id' in data ? (this.user = data) : null));
  }
}
