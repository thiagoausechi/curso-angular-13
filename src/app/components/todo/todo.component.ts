import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
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

  constructor(
    private crudService: CrudService<Task>,
    private localStorageService: LocalStorageService
  ) {
    const cachedTasks = this.localStorageService.get('tasks');

    // Basic verification, not ideal (indeed)
    if (cachedTasks || Array.isArray(cachedTasks))
      this.crudService.setStorage(new Map(cachedTasks as any[]));
  }

  ngOnInit(): void {}

  get tasks() {
    return this.crudService.getStorage();
  }

  addNewTask(): void {
    if (!this.newTask) return;

    this.crudService.create((id) => ({
      id,
      name: this.newTask,
      done: false,
    }));

    this.newTask = '';
    this.store();
  }

  toggleDone(id: string) {
    const task = this.getTaskByID(id);
    if (!task) return;

    this.crudService.update(id, {
      ...task,
      done: !task.done,
    });

    this.store();
  }

  deleteTask(id: string) {
    this.crudService.delete(id);
    this.store();
  }

  private getTaskByID(id: string): Task | null {
    if (!id) return null;

    const task = this.crudService.read(id);
    if (!task) return null;

    return task;
  }

  private store() {
    this.localStorageService.set(
      'tasks',
      Array.from(this.crudService.getStorage())
    );
  }
}
