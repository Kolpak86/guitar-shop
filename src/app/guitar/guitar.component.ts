import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Guitar } from '../models/guitar';
import * as ShopActions from '../store/actions';
import { ShopState } from '../store/reducer';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss'],
})
export class GuitarComponent {
  @Input() guitar!: Guitar;
  inCart = false;

  constructor(private store: Store<ShopState>) {}

  addToCart(guitar: Guitar) {
    this.store.dispatch(ShopActions.add({ guitar }));
    this.inCart = true;
  }

  removeFromCart(guitar: Guitar) {
    this.store.dispatch(ShopActions.remove({ guitar }));
    this.inCart = false;
  }
}
