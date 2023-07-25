import { Component, OnInit } from '@angular/core';

type Link = {
  display: string;
  link: string;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  links: Link[] = [
    { display: 'Home', link: '/' },
    { display: 'About', link: '/about' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
