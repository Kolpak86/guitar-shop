import { createAction, props } from '@ngrx/store';
import { Guitar } from '../models/guitar';

export const add = createAction(
  'Add [Guitars] to cart',
  props<{ guitar: Guitar }>()
);

export const remove = createAction(
  'Remove [Guitars] from cart',
  props<{ guitar: Guitar }>()
);

export const loadItems = createAction('Load [Guitars] from server');

export const loadSuccess = createAction(
  'Load [Guitars] success',
  props<{ guitars: Guitar[] }>()
);
