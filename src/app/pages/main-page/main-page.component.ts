import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {PageTemplateComponent} from "../../templates/page-template/page-template.component";
import {ButtonComponent} from "../../components/atoms/button/button.component";
import {AddTodoModalComponent} from "../../components/molecules/add-todo-modal/add-todo-modal.component";
import {Todo} from "../../components/organisms/todo-list/todo.model";
import {TodoListComponent} from "../../components/organisms/todo-list/todo-list.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    PageTemplateComponent,
    ButtonComponent,
    AddTodoModalComponent,
    TodoListComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  pageTitle: string = 'My TODO list';
  todos = signal<Todo[]>([
    {description: 'Learn Angular', isDone: false, id: 0},
    {description: 'Build TODO app', isDone: true, id: 1}
  ]);
  isAddModalOpen = signal<boolean>(false);

  openAddModal() {
    this.isAddModalOpen.set(true);
  }

  closeAddModal() {
    this.isAddModalOpen.set(false);
  }

  addTodo(description: string) {
    console.log("add todo")
    this.todos.set([...this.todos(), { description, isDone: false, id: new Date().getMilliseconds() }]);
    this.closeAddModal();
  }

  deleteTodo(todo: Todo) {
    this.todos.set(this.todos().filter(t => t.id !== todo.id));
  }

  toggleTodoStatus(todo: Todo) {
    const updatedTodos = this.todos().map(t =>
        t.id === todo.id ? { ...t, isDone: !t.isDone } : t
    );
    this.todos.set(updatedTodos);
  }
}
