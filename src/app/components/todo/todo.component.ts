import { Component, OnInit } from '@angular/core';

type Task = {
  name: string;
  done: boolean;
};

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [
    {
      name: 'Test',
      done: false,
    },
    {
      name: 'Test 2',
      done: true,
    },
    {
      name: 'Really long task name because I can, because I will and because I need',
      done: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
