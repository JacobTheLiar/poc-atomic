import {ChangeDetectionStrategy, Component, inject, input, OnInit, output} from '@angular/core';
import {TextInputComponent} from "../../atoms/text-input/text-input.component";
import {ButtonComponent} from "../../atoms/button/button.component";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-todo-modal',
  standalone: true,
  imports: [
    TextInputComponent,
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './add-todo-modal.component.html',
  styleUrl: './add-todo-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoModalComponent{
  formBuilder = inject(FormBuilder)
  add = output<string>();
  cancel = output<void>();
  todoForm = this.formBuilder.group({
    description: this.formBuilder.control<string>('', [Validators.required])
  });

  onAddEvent(){
    console.log('submit')
    const newDescription = this.todoForm.controls['description'].value;
    console.log(newDescription);
    if (newDescription){
      console.log('submit: '+newDescription);
      this.add.emit(newDescription)
      this.todoForm.reset();
    }
  }

  onCancelEvent(){
    this.cancel.emit();
    this.todoForm.reset();
  }
}
