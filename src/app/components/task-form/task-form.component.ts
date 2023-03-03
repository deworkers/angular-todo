import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Task} from './../../models/task'

@Component({
    selector: 'task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent { 
    task = new Task()
    showError: boolean = false

    @Input() addTask: Function
    @Input() tasks: Task[]

    @Output() onCloseForm = new EventEmitter<boolean>();
    closeForm() {
        this.onCloseForm.emit()
    }

    addNewTask(taskForm: NgForm) {
        if (taskForm.valid) {
            this.showError = false
            this.task.id = this.tasks.length
            this.addTask(this.task)
    
            this.task = new Task()
            this.closeForm()
        } else {
            this.showError = true
        }
    }
}