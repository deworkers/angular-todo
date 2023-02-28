import { Component } from '@angular/core';
import {Task} from './models/task'
import {tasks as data} from './data/tasks'

@Component({
    selector: 'task-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    constructor() {}

    public tasks:Task[] = data

    addTask(model: Task) {
        this.tasks.push(new Task(model))
    }

    removeTask(id: number) {
        this.tasks = this.tasks.filter((task)=> {
            return task.id !== id
        })
    }

    editTask(model: Task) {
        // to do
    }
    
    showTask: boolean
    activeTask: Task
    
    toggleShowTask() {
        this.showTask = !this.showTask
    }
    
    setActiveTask(task: Task) {
        this.activeTask = task
    }

    onOpenTask(increased:any){
        this.setActiveTask(increased)
        this.toggleShowTask()
    }

    onCloseTask() {
        this.toggleShowTask()
    }

    showForm: boolean

    toggleShowForm() {
        this.showForm = !this.showForm
    }

    onCloseForm() {
        this.toggleShowForm()
    }

    showEdit: boolean

    onEditTask(increased:any) {
        this.setActiveTask(increased)
        this.showEdit = !this.showEdit
    }

    onCloseEdit() {
        this.showEdit = !this.showEdit
    }
}