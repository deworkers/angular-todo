import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import {Task} from './../../models/task'
      
@Component({
    selector: 'task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent { 
    @Input() tasks: Task[]
    @Input() removeTask: Function

    @Output() onOpenTask = new EventEmitter<boolean>();
    openTask(increased:any) {
        this.onOpenTask.emit(increased)
    }

    @Output() onEditTask = new EventEmitter<boolean>();
    editTask(increased:any) {
        this.onEditTask.emit(increased)
    }

    setDayToDeadline(date: string, isClose: Boolean) : string {
        let days = Math.floor((Date.parse(date) - Date.now()) / (1000 * 60 * 60 * 24)) // разность в милисекундах в целые дни

        if (days > 3 || isClose) { // не подсвечиваем закрытые задачи
            return ''
        } else if (days >= 0) {
            return 'table-warning'
        } else {
            return 'table-danger'
        }
    }

    drop(event: CdkDragDrop<any>) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex,
          );
        }
    }
}