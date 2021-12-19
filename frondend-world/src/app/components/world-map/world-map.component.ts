import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/app/interfaces/cell';
import { WorldMapService } from 'src/app/services/world-map.service'

@Component({
    selector: 'app-world-map',
    templateUrl: './world-map.component.html',
    styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {
    center: string = '0-0';
    map: Cell[][] = [[]];

    constructor(
        private mapService: WorldMapService
    ) { }

    ngOnInit(): void {
        this.getMap();
    }

    onSelect(local: string): void {
        this.center = local;
    }

    getMap(): void {
        this.mapService.getMap(this.center)
            .subscribe(map => this.map = map);
    }

}
