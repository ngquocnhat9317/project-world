import { createSelector } from '@ngrx/store';
import { Cell } from 'src/app/interfaces/cell';

export const selectFeature = (state: Cell) => state.local;

