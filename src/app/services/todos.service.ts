import { Injectable } from '@angular/core';
import { todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  // todos: Array<todo> = []; // don`t need this because the data comes from the DB
  constructor(private http: HttpClient) {}

  async getAllTodos(): Promise<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .toPromise();
  }
}
