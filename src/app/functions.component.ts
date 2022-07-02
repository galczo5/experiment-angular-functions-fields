import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-functions',
  template: `
    <p>
      {{ test() }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FunctionsComponent {

  test(): string {
    return 'test';
  }

}
