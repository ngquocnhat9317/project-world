import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { People } from 'src/app/interfaces/people';
import { CellInformationService } from 'src/app/services/cell-information.service';

@Component({
    selector: 'tab-list',
    templateUrl: './tab-list.component.html',
    styleUrls: ['./tab-list.component.css'],
})
export class TabListComponent implements OnInit, OnChanges {

    @Input() items?: string[];
    @Input() local?: string;
    selected?: string

    constructor(private cellService: CellInformationService) {}

    ngOnInit(): void {
        this.chooseDefaultTab()
    }

    chooseDefaultTab() {
        if ((this.items != undefined && this.items.length > 0)
                && (this.selected != undefined && !this.items.includes(this.selected))) {
            this.selected = this.items[0]
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['items'] != undefined
                && changes['items'].currentValue !== changes['items'].previousValue) {
            this.chooseDefaultTab()
        }
    }

    onSelect(item: string) {
        this.selected = item;
    }

    getInfo() {
        if (this.selected === 'People') {
        }
        if (this.selected === 'Person') {
        }
        if (this.selected === 'Terrain') {
        }
        if (this.selected === 'Resource') {
        }
    }

    getPeopleInfo(): People {}

    getPersonInfo() {

    }

    getTerrainInfo() {

    }

    getResourceInfo() {

    }
}
