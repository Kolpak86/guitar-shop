import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { GuitarsService } from '../services/guitars.service';
import * as ShopActions from './actions';

@Injectable()
export class ShopEffects {
  loadGuitars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShopActions.loadItems),
      mergeMap(() =>
        this.guitarService.getAll().pipe(
          map((guitars) => ShopActions.loadSuccess({ guitars })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private guitarService: GuitarsService
  ) {}
}
