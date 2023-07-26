import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.css'],
})
export class RefreshButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  refresh(): void {
    console.log('Irá fazer outra requisição de Usuário');
  }
}
