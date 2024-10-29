import {ChangeDetectionStrategy, Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  label = input<string>('caption');
  onClick = input<() => void>();
  disabled = input<boolean>(false);

  onClickEvent(){
    this.onClick();
  }
}
