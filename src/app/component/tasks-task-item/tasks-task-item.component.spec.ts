import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTaskItemComponent } from './tasks-task-item.component';

describe('TasksTaskItemComponent', () => {
  let component: TasksTaskItemComponent;
  let fixture: ComponentFixture<TasksTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksTaskItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
