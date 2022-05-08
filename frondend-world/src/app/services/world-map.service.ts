import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cell } from 'src/app/interfaces/cell';

export interface MapData {
    map: Cell[][],
    columns: number[],
    rows: number[]
}

const getDumpMap = (center: string): MapData => {
    let rows = []
    let listRow = []
    let listColumn = [];
    const column = parseInt(center.split('/')[0]);
    const row = parseInt(center.split('/')[1]);
    for (let y = (row - 4); y <= (row + 4); y++) {
        let cells = [];
        for (let x = (column - 4); x <= (column + 4); x++) {
            cells.push({
                'local': `${x}/${y}`,
                'status': '1'
            })
            if (listColumn.length < 9)
                listColumn.push(x)
        }
        rows.push(cells);
        listRow.push(y)
    }
    return ({
        'map': rows,
        'columns': listColumn,
        'rows': listRow
    });
}

const getDumpWorldId = (): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


@Injectable({
    providedIn: 'root'
})
export class WorldMapService {

    constructor() { }

    getMap(center: string): Observable<MapData> {
        const cells = of(getDumpMap(center));
        return cells;
    }

    getWorld(): Observable<string> {
        const world = of(getDumpWorldId());
        return world;
    }
}
