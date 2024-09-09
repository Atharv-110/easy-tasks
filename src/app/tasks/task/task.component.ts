import { Component, inject, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { TaskModel } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: TaskModel;
  private tasksService = inject(TasksService);

  onCompleteTask = () => {
    this.tasksService.removeTask(this.task.id);
  };
}
