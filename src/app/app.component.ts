import { Component, OnInit } from '@angular/core';
import {Task} from './models/task'
import {tasks as data} from './data/tasks'

@Component({
    selector: 'task-app',
    templateUrl: './app.component.html'
})


export class AppComponent {
    tasks:Task[] = []

    ngOnInit() {
        this.tasks = data;
    }

    addTask(task: Task) {
        this.tasks.push(task)
    }

    onRemoveTask(increased:any) {
        this.tasks = this.tasks.filter((task)=> {
            return task.id !== increased
        })
    }
    
    showTask: boolean = false
    activeTask: Task
    
    setActiveTask(task: Task) {
        this.activeTask = task
    }

    onOpenTask(increased:any){
        this.setActiveTask(increased)
        this.showTask = !this.showTask
    }

    onCloseTask() {
        this.showTask = !this.showTask
    }

    showForm: boolean = false

    onCloseForm() {
        this.showForm = false
    }

    showEdit: boolean = false

    onEditTask(increased:any) {
        this.setActiveTask(increased)
        this.showEdit = !this.showEdit
    }

    onCloseEdit() {
        this.showEdit = !this.showEdit
    }
}