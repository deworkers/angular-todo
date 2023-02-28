import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from './../../models/task'
      
@Component({
    selector: 'task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent { 
    @Input() tasks: Task[];
    @Input() removeTask: Function

    @Output() onOpenTask = new EventEmitter<boolean>();
    openTask(increased:any) {
        this.onOpenTask.emit(increased);
    }

    @Output() onEditTask = new EventEmitter<boolean>();
    editTask(increased:any) {
        this.onEditTask.emit(increased);
    }

    setDayToDeadline(date) : string {
        let days = Math.floor((Date.parse(date) - Date.now()) / (1000 * 60 * 60 * 24))
        if (days <= 0) {
            return 'danger'
        } else if (days <= 3) {
            return 'warning'
        } else {
            return ''
        }
    }
}