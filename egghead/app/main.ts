import { bootstrap } from 'angular2/platform/browser';
import {Component,provide} from 'angular2/core';
import {TodoInput} from './components/todo-input'
import {TodoList} from './components/todo-list';
import {TodoService} from './service/todo-service';
@Component({
    selector: 'my-app',
    directives : [TodoInput,TodoList],
    template: `<div>
                    <todo-input></todo-input>
                    <todo-list></todo-list>
                </div>`
})
class App{}
bootstrap(App,[TodoService])
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));

