import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TasksService, Task } from '../../services/tasks';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  imports: [RouterLink],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.scss'
})
export class TaskDetailComponent implements OnInit {
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService, 
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.tasksService.getTask(id).subscribe(data => {
      this.task = data;
      console.log('Task detail:', this.task);
      this.cdr.detectChanges(); // 🔥 fuerza render
    });
  }

}