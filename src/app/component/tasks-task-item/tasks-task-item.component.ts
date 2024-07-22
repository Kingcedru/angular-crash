import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-tasks-task-item',
  templateUrl: './tasks-task-item.component.html',
  styleUrls: ['./tasks-task-item.component.css'],
})
export class TasksTaskItemComponent implements OnInit {
@Input() task!: Task
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
