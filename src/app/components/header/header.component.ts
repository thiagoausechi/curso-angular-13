import { Component, OnInit } from '@angular/core';
import { routes as rootRoutes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  routes = rootRoutes;

  constructor() {}

  ngOnInit(): void {}
}
