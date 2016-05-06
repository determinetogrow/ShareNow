import {Component,Inject} from 'angular2/core';
import {TodoService} from '../service/todo-service';
import {TodoModel} from '../model/todo-model';

@Component({
    selector:'todo-input',
    template:`<div>
            <form (submit)='onSubmit()'>
                <input type='text' [(ngModel)]='todoModel.title'>
           </form>
            </div>`
})

export class TodoInput{
    todoModel:TodoModel = new TodoModel();;
    constructor(public todoService:TodoService){
        
    }
    onSubmit(){
        this.todoService.todos.push(this.todoModel);
        console.log(this.todoService.todos);
        // console.log(event,value);
    }
}
