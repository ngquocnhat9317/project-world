import { createAction, props } from "@ngrx/store";
import { Cell } from "src/app/interfaces/cell";

export const CHOOSE_CELL = '[CELL] choose';
export const REMOVE_CELL = '[CELL] remove';

export const chooseCell = createAction(
    CHOOSE_CELL,
    props<Cell>()
);

export const removeCell = createAction(
    REMOVE_CELL
);