interface ITask {
    id: number
    title: string
    descripton: string
    expiration: string
    isClose: Boolean
}

export class Task implements ITask {
    id: number = 0
    title: string = ''
    descripton: string = ''
    expiration: string = ''
    isClose: Boolean = false

    constructor(values: Object = {}) {
        
        Object.assign(this, values);
    } 
}