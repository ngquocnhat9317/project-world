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

    worldId?: string;
    cellLocal?: string;
    leftSideItems: string[] = ['Terrain', 'Resource'];
    rightSideItems: string[] = ['People', 'Person'];

    constructor(private worldService: WorldMapService) { }

    ngOnInit(): void {
        this.changeSideitem(window.innerWidth);
    }

    createWorld(): void {
        this.worldService.getWorld()
            .subscribe(worldId => this.worldId = worldId);
    }

    onSelect(local: string): void {
        this.cellLocal = local;
    }

    changeSideitem(width: number): void {
        if (width < 900 && this.leftSideItems.length == 2) {
            this.leftSideItems = this.rightSideItems.concat(this.leftSideItems);
            this.rightSideItems = [];
        }
        if (width > 900 && this.leftSideItems.length > 2) {
            this.leftSideItems = ['Terrain', 'Resource'];
            this.rightSideItems = ['People', 'Person'];
        }
    }

    onResize(event: any): void {
        let innerWidth = event.target.innerWidth;
        this.changeSideitem(innerWidth);
    }
}
