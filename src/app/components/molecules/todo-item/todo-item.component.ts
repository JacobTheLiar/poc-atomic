import {ChangeDetectionStrategy, Component, computed, input, OnInit, output} from '@angular/core';
import {DescriptionComponent} from "../../atoms/description/description.component";
import {ButtonComponent} from "../../atoms/button/button.component";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    DescriptionComponent,
    ButtonComponent
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent{
  description = input<string>('');
  isDone = input<boolean>(false);
  status = computed<string>( () => this.isDone() ? 'done' : 'pending')
  delete = output<void>();
  toggle = output<void>();
}
