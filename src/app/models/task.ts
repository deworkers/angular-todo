export class Task {
    id: number
    title: string
    descripton: string
    expiration: string
    isClose: Boolean

    constructor(values: Object = {}) {
        Object.assign(this, values);
    } 
}