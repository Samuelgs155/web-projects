import { Component } from '@angular/core';
import { Task, TasksService } from '../../services/tasks';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {

  tasksService!: TasksService;

  task: Task = {
    title: '',
    description: '',
    status: 'pending',
    image_url: 'task-icon.png'
  };

  constructor(private service: TasksService) {
    this.tasksService = service;
  }


  saveTask(): void {
  if (this.task.id) {
      this.tasksService.updateTask(this.task.id, this.task).subscribe();
    } else {
      this.tasksService.createTask(this.task).subscribe();
    }
  }

}
