import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project006_forms_todolist');

  task = new FormControl();

  list: string[];

  constructor() {
    this.list = [];
    let data = localStorage.getItem("tasks");
    if (data != null) {
      let array = JSON.parse(data);
      if (array != null)
        for (let task of array)
          this.list.push(task);
    }
  }

  add() {
    this.list.push(this.task.value);
    localStorage.setItem('tasks', JSON.stringify(this.list));
    this.task.setValue('');
  }

  delete(position: number) {
    this.list.splice(position, 1);
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  deleteAll() {
    localStorage.clear();
    this.list = [];
  }
}
