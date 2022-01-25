import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Guitar } from '../models/guitar';
import * as ShopActions from '../store/actions';
import { AppState } from '../models/app-state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bannersIndex = [1, 2, 3, 4];
  items$!: Observable<Guitar[]>;

  constructor(private store: Store<AppState>) {
    this.items$ = this.store.select((state) => state.shop.items);
  }

  ngOnInit(): void {
    this.store.dispatch(ShopActions.loadItems());
  }
}
