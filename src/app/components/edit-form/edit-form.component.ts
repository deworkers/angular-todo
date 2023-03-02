import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../models/task'

@Component({
    selector: 'edit-form',
    templateUrl: './edit-form.component.html'
})
export class EditFormComponent { 
    @Input() editTask: Function
    @Input() activeTask: Task

    @Output() onCloseEdit = new EventEmitter<boolean>()
    closeForm() {
        this.onCloseEdit.emit()
    }
}