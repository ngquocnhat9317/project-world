import { Component, OnInit } from '@angular/core';
import { WorldMapService } from 'src/app/services/world-map.service';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

    worldId: string | undefined = undefined

    cellLocal?: string

    constructor(private worldService: WorldMapService) { }

    ngOnInit(): void {
    }

    createWorld() {
        this.worldService.getWorld()
            .subscribe(worldId => this.worldId = worldId)
    }

    onSelect(local: string) {
        this.cellLocal = local
        console.log(this.cellLocal)
    }
}
