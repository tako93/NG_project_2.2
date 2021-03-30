import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../task/task';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {

  private backupTask: Partial<Task> = { ... this.data.task };

  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: TaskDialogData) { }

  ngOnInit(): void {
  }

}

export interface TaskDialogData {

  task: Task;
  enableDelete: boolean;
} 
