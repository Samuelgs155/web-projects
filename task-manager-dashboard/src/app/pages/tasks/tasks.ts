import { Component } from '@angular/core';
import { Task, TasksService } from '../../services/tasks';
import { RouterLink, Router  } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {

  tasks: Task[] = [];

constructor(private tasksService: TasksService, 
  private router: Router, private cdr: ChangeDetectorRef) {}


 ngOnInit(): void {
    this.loadTasks();

    // 🔥 Esto fuerza recarga al navegar
    this.router.events.subscribe(() => {
      this.loadTasks();
    });
  }

loadTasks(): void {
  this.tasksService.getTasks().subscribe(data => {
    this.tasks = data;
    this.cdr.detectChanges(); // 🔥 fuerza render
  });
}

deleteTask(id: number): void {
  this.tasksService.deleteTask(id).subscribe(() => {
    this.loadTasks();
  });
}



}
