import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../models/app-state';
import { Guitar } from '../models/guitar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cart$!: Observable<Guitar[]>;

  constructor(private store: Store<AppState>) {
    this.cart$ = this.store.select((state) => state.shop.cart);
  }
}
