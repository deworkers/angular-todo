import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent }   from './app.component';

import {TaskListComponent} from './components/task-list/task-list.component'
import {TaskFormComponent} from './components/task-form/task-form.component'
import {EditFormComponent} from './components/edit-form/edit-form.component'
import {ShowTaskComponent} from './components/show-task/show-task.component'


@NgModule({
    imports:      [ BrowserModule, FormsModule, DragDropModule ],
    declarations: [ AppComponent, TaskListComponent, TaskFormComponent, ShowTaskComponent, EditFormComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }