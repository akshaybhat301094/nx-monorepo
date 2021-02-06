import { Component, Input } from '@angular/core';
import { Todo } from '@nx-app/data';

@Component({
  selector: 'nx-app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos: Todo[];
}
