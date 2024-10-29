import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInputComponent {
  placeholder = input<string>('');
  controlName = input<string>('');
  value = input<string>('');
}
