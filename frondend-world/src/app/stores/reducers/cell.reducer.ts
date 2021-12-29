import { Action, createReducer, on } from '@ngrx/store';
import { Cell } from 'src/app/interfaces/cell';
import * as CellActions from 'src/app/stores/actions/cell.action';

const initialState: Cell = {
    local: '',
    status: ''
}

export const cellReducer = createReducer(
    initialState,
    on(CellActions.chooseCell, (state, cell: Cell) => ({local: cell.local, status: cell.status})),
    on(CellActions.removeCell, state => ({local: '', status: ''}))
)
