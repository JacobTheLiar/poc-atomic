import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {TitleComponent} from "../../components/atoms/title/title.component";

@Component({
  selector: 'app-page-template',
  standalone: true,
    imports: [
        TitleComponent
    ],
  templateUrl: './page-template.component.html',
  styleUrl: './page-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTemplateComponent {
  title = input<string>('');
}
