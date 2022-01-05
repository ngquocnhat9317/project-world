import { Component, OnInit } from '@angular/core';
import { WorldMapService } from 'src/app/services/world-map.service';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css'],
    host: {
        '(window:resize)': 'onResize($event)'
    }
})
export class BodyComponent implements OnInit {

    worldId: string | undefined = undefined;
    cellLocal?: string;
    leftSideItems: string[] = ['Terrain', 'Resource']
    rightSideItems: string[] = ['People', 'Person']

    constructor(private worldService: WorldMapService) { }

    ngOnInit(): void {
    }

    createWorld() {
        this.worldService.getWorld()
            .subscribe(worldId => this.worldId = worldId)
    }

    onSelect(local: string) {
        this.cellLocal = local
    }

    onResize(event: any){
        let innerWidth = event.target.innerWidth
        if (innerWidth < 900) {
            this.leftSideItems = this.rightSideItems.concat(this.leftSideItems)
            this.rightSideItems = []
        } else {
            this.leftSideItems = ['Terrain', 'Resource']
            this.rightSideItems = ['People', 'Person']
        }
    }
}
