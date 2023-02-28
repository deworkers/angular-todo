import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from './../../models/task'

@Component({
    selector: 'show-task',
    templateUrl: './show-task.component.html'
})
export class ShowTaskComponent { 
    @Input() activeTask: Task

    @Output() onCloseTask = new EventEmitter<boolean>();
    closeTask() {
        this.onCloseTask.emit();
    }
}