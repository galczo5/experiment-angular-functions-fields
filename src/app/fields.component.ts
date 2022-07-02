import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-fields',
  template: `
    <p>
      {{ test }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldsComponent {

  test: string = 'test';

}
