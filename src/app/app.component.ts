import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="selectTestType('fields')">Use Fields</button>
      <button (click)="selectTestType('functions')">Use Functions</button>
      <button (click)="test()">Run test (selected {{ testType }})</button>
      <button (click)="reset()">Reset</button>
      <span *ngIf="result">Result {{ result }}</span>
    </div>
    <div *ngIf="testType === 'fields' && visible">
        <app-fields *ngFor="let x of TEST_ARRAY"></app-fields>
    </div>
    <div *ngIf="testType === 'functions' && visible">
      <app-functions *ngFor="let x of TEST_ARRAY"></app-functions>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  readonly TEST_ARRAY = new Array(1000).map((value, index) => index);
  readonly ITERATIONS = 1000;

  result = 0;
  testType: 'fields' | 'functions' = 'functions';
  visible = false;


  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  reset() {
    this.result = 0;
    this.changeDetectorRef.detectChanges();
  }

  selectTestType(type: 'fields' | 'functions') {
    this.testType = type;
    this.changeDetectorRef.detectChanges();
  }

  test() {
    const start = performance.now();
    for (let i = 0; i < this.ITERATIONS; i++) {
      this.visible = !this.visible;
      this.changeDetectorRef.detectChanges();
    }
    const end = performance.now();

    this.result = end - start;
    this.changeDetectorRef.detectChanges();
  }

}
