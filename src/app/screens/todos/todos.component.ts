import { todo } from 'src/app/model/todo';
import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Array<todo> = [];
  constructor(private TodosService: TodosService) {}

  async ngOnInit() {
    try {
      this.todos = await this.TodosService.getAllTodos();
      console.log(this.todos);
    } catch (err) {
      console.log(err);
    }
  }
}
