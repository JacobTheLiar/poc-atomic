import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {TodoItemComponent} from "../../molecules/todo-item/todo-item.component";
import {Todo} from "./todo.model";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    TodoItemComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  items = input<Todo[]>([]);
  delete = output<Todo>();
  toggle = output<Todo>();
}
