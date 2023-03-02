import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from './../../models/task'

@Component({
    selector: 'task-form',
    templateUrl: './task-form.component.html'
})
export class TaskFormComponent { 
    @Input() addTask: Function
    @Input() tasks: Task[]

    addNewTask() {
        if (this.task.title) {
            this.task.id = this.tasks.length
            this.task.isClose = false

            this.tasks.push(this.task);
            //this.addTask(this.task)
    
            this.task = new Task()
            this.closeForm()
        }
    }

    @Output() onCloseForm = new EventEmitter<boolean>();
    closeForm() {
        this.onCloseForm.emit()
    }

    task = new Task()

}