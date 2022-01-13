import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { People } from 'src/app/interfaces/people';
import { Person } from 'src/app/interfaces/person';
import { Resource } from 'src/app/interfaces/resource';
import { Terrain } from 'src/app/interfaces/terrain';
import { CellInformationService } from 'src/app/services/cell-information.service';

@Component({
    selector: 'tab-list',
    templateUrl: './tab-list.component.html',
    styleUrls: ['./tab-list.component.css'],
})
export class TabListComponent implements OnInit, OnChanges {

    @Input() items?: string[];
    @Input() local?: string;
    selected?: string;
    personId?: number;

    peopleInfo?: People;
    personInfo?: Person;
    terrainInfo?: Terrain;
    resourceInfo?: Resource;

    constructor(private cellService: CellInformationService) {}

    ngOnInit(): void {
        this.chooseDefaultTab();
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['items'] !== undefined
                && changes['items'].currentValue !== changes['items'].previousValue) {
            this.chooseDefaultTab();
        }
        this.getInfo();
    }

    getIndexSelectedTab(item: string): { [klass: string]: any; } {
        if (item === this.selected) {
            return {'z-index': 2, 'background-color': '#dffcf5'}
        } else {
            return {'z-index': 1, 'background-color': '#f3d9da'}
        }
    }

    getElement(event: any): void {
        console.log(event.target)
    }

    getIcon(gender: string): string {
        if (gender === 'male')
            return 'icon-person-male'
        else
            return 'icon-person-female'
    }

    chooseDefaultTab(): void {
        if ((this.items !== undefined && this.selected === undefined && this.items.length > 0)
            || (this.items !== undefined && this.selected !== undefined && !this.items.includes(this.selected))) {
            this.selected = this.items[0];
        }
    }

    onSelectTab(selected: string): void {
        this.selected = selected;
        this.getInfo();
    }

    onSelectPerson(selected: number): void {
        this.personId = selected;
    }

    getInfo(): void {
        if (this.selected === 'People') {
            this.getPeopleInfo();
        }
        if (this.selected === 'Person') {
            this.getPersonInfo();
        }
        if (this.selected === 'Terrain') {
            this.getTerrainInfo();
        }
        if (this.selected === 'Resource') {
            this.getResourceInfo();
        }
    }

    getPeopleInfo(): void {
        if (this.local !== undefined)
            this.cellService.getPeopleInfo(this.local)
                .subscribe(info => {
                    this.peopleInfo = info;
                });
    }

    getPersonInfo(): void {
        if (this.personId !== undefined && this.local !== undefined)
            this.cellService.getPersonInfo(this.local, this.personId)
                .subscribe(info => {
                    this.personInfo = info;
                });
    }

    getTerrainInfo(): void {
        if (this.local !== undefined)
            this.cellService.getTerrainInfo(this.local)
                .subscribe(info => {
                    this.terrainInfo = info;
                });
    }

    getResourceInfo(): void {
        if (this.local !== undefined)
            this.cellService.getResourceInfo(this.local)
                .subscribe(info => {
                    this.resourceInfo = info;
                });
    }
}
