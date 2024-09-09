import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIModule } from '../ui/ui.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [UIModule, CommonModule, FormsModule],
})
export class TasksModule {}
