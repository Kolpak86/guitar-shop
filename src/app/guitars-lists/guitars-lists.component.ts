import { Component, Input } from '@angular/core';
import { Guitar } from '../models/guitar';

@Component({
  selector: 'app-guitars-lists',
  template: `<div class="guitar-list">
    <app-guitar *ngFor="let guitar of guitars" [guitar]="guitar"></app-guitar>
  </div>`,
  styles: [
    `
      .guitar-list {
        padding: 10px 0;
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `,
  ],
})
export class GuitarsListsComponent {
  @Input() guitars: Guitar[] | null = [];
}
