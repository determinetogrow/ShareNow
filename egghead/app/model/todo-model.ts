export class TodoModel{
    status:string = "started";
    title:string;
    constructor(data:string=""){
        this.title = data;
    }
    
    toggle():void{
        this.status = this.status == "started"?"completed":"started";
    }
}