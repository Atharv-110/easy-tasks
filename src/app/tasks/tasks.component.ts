import { Component, Input } from '@angular/core';
import { NewTaskModel } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get firstName() {
    return this.name.split(' ')[0];
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartNewTask = () => {
    this.isAddingTask = true;
  };

  onCloseAddTask = () => {
    this.isAddingTask = false;
  };

  onAddTask = (taskData: NewTaskModel) => {
    this.tasksService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  };
}
