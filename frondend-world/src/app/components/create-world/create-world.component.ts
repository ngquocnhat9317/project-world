import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/app/interfaces/cell';
import { TerrainType } from 'src/app/interfaces/terrain';
import { WorldMapService } from 'src/app/services/world-map.service';

@Component({
    selector: 'app-create-world',
    templateUrl: './create-world.component.html',
    styleUrls: ['./create-world.component.css']
})
export class CreateWorldComponent implements OnInit {

    map: Cell[][] = [[]];
    brush: number = 3;
    listBrush: number[] = [3, 5, 10, 25, 40]
    terrain: number = 1;
    listTerrain: TerrainType[] = [];

    constructor(
        private mapService: WorldMapService
    ) { }

    ngOnInit(): void {
        this.getMap();
        this.getTerrainType();
    }

    draw(x: number, y: number): void {
        for (let i=0; i<this.map.length; i++) {
            for (let j=0; j<this.map[i].length; j++) {
                if (((i - y)**2 + (j - x)**2) <= this.brush**2) this.map[i][j].terrain = this.terrain;
            }
        }
    }

    getMap(): void {
        this.mapService.getDefaultMap()
            .subscribe(map => {
                this.map = map
            })
    }

    getTerrainType(): void {
        this.mapService.getTerrainType()
            .subscribe(listTerrain => {
                this.listTerrain = listTerrain
            })
    }

    selectBrush(select: number): void {
        this.brush = select
    }

    selectTerrain(select: number): void {
        this.terrain = select
    }
}
