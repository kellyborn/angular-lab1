import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [
    { task: "Make hair appointment", completed: false },
    { task: "Make wellness visit appointments", completed: false },
    { task: "Complete resume assignment", completed: false },
    { task: "Pickup Mom's gift", completed: true },
    { task: "Find appetizer recipe", completed: false },
    { task: "Call Grandma", completed: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
