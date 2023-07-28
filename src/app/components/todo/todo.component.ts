import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

type Task = {
  id: string;
  name: string;
  done: boolean;
};

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  newTask: string = '';

  tasks = new Map<string, Task>();

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    const cachedTasks = this.localStorageService.get('tasks');

    // Basic verification, not ideal
    if (cachedTasks || Array.isArray(cachedTasks))
      this.tasks = new Map(cachedTasks);
  }

  addNewTask(): void {
    if (!this.newTask) return;

    const id = crypto.randomUUID();

    this.tasks.set(id, {
      id: id,
      name: this.newTask,
      done: false,
    });

    this.newTask = '';
    this.store();
  }

  toggleDone(id: string) {
    const task = this.getTaskByID(id);
    if (!task) return;

    this.tasks.set(id, {
      ...task,
      done: !task.done,
    });

    this.store();
  }

  deleteTask(id: string) {
    this.tasks.delete(id);
    this.store();
  }

  private getTaskByID(id: string): Task | null {
    if (!id) return null;

    const task = this.tasks.get(id);
    if (!task) return null;

    return task;
  }

  private store() {
    this.localStorageService.set('tasks', Array.from(this.tasks));
  }
}
