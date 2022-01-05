import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'tab-list',
    templateUrl: './tab-list.component.html',
    styleUrls: ['./tab-list.component.css'],
})
export class TabListComponent implements OnInit, OnChanges {

    @Input() items?: string[];
    @Input() local?: string;
    selected?: string

    constructor() {}

    ngOnInit(): void {
        this.chooseDefaultTab()
    }

    chooseDefaultTab() {
        if (this.items != undefined && this.items.length > 0)
            this.selected = this.items[0]
    }

    ngOnChanges(changes: SimpleChanges) {
        this.chooseDefaultTab()
    }

    onSelect(item: string) {
        this.selected = item;
    }
}
