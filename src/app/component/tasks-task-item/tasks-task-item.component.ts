import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-task-item',
  templateUrl: './tasks-task-item.component.html',
  styleUrls: ['./tasks-task-item.component.css'],
})
export class TasksTaskItemComponent implements OnInit {
@Input() task!: Task

  constructor() {}

  ngOnInit(): void {}
}
