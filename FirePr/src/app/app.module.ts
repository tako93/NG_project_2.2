import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from './task/task.component';
import { MatCardModule } from '@angular/material/card'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
