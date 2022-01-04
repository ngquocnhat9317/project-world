import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from 'src/app/interfaces/cell';
import { WorldMapService } from 'src/app/services/world-map.service';

@Component({
    selector: 'world-map',
    templateUrl: './world-map.component.html',
    styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {

    @Output() selectCell = new EventEmitter<string>();
    @Input() worldId?: string;
    center: string = '0/0';
    map: Cell[][] = [[]];
    listColumn: number[] = [];
    listRow: number[] = [];

    constructor(
        private mapService: WorldMapService
    ) { }

    ngOnInit(): void {
        this.getMap();
    }

    select(local: string): void {
        this.selectCell.emit(local)
        this.center = local;
        this.getMap();
    }

    getMap(): void {
        this.mapService.getMap(this.center)
            .subscribe(map => {
                this.map = map.map;
                this.listColumn = map.columns;
                this.listRow = map.rows;
            });
    }

}
