import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadrados',
  template: `
  <button pButton class="p-button-outlined p-button-secondary otra" label="-" *ngIf="!value"></button>
  <button pButton class="p-button-primary"label="{{ value }}" *ngIf="value == 'X'"></button>
  <button pButton class="p-button-success" label="{{ value }}" *ngIf="value == 'O'"></button>
`,
styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }; .otra{color:#6c757d};']
})
export class CuadradosComponent implements OnInit {
  @Input() value: 'X' | 'O';
  constructor() { }

  ngOnInit(): void {
  }

}
