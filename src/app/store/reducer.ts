import { createReducer, on } from '@ngrx/store';
import { Guitar } from '../models/guitar';
import { add, loadSuccess, remove } from './actions';

export interface ShopState {
  items: Guitar[];
  cart: Guitar[];
}

export const initialState: ShopState = {
  items: [],
  cart: [],
};

export const shopReducer = createReducer(
  initialState,
  on(loadSuccess, (state, { guitars }) => ({ ...state, items: guitars })),
  on(add, (state, { guitar }) => ({
    ...state,
    cart: [...state.cart, guitar],
  })),
  on(remove, (state, { guitar }) => ({
    ...state,
    cart: [...state.cart.filter((c) => c.name !== guitar.name)],
  }))
);
