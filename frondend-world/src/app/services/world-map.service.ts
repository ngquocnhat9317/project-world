import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cell } from 'src/app/interfaces/cell';

const getDumpMap = (center: string): Cell[][] => {
    let rows = []
    const column = parseInt(center.split('-')[0]);
    const row = parseInt(center.split('-')[1]);
    for (let y = (row - 5); y <= (row + 5); y++) {
        let cells = [];
        for (let x = (column - 5); x <= (column + 5); x++) {
            cells.push({
                'local': `(${x})-(${y})`,
                'status': '1'
            })
        }
        rows.push(cells);
    }
    return rows;
}


@Injectable({
    providedIn: 'root'
})
export class WorldMapService {

    constructor() { }

    getMap(center: string): Observable<Cell[][]> {
        const cells = of(getDumpMap(center));
        console.log(cells)
        return cells;
    }
}
