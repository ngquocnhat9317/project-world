import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'tab-list',
    templateUrl: './tab-list.component.html',
    styleUrls: ['./tab-list.component.css'],
})
export class TabListComponent implements OnInit {

    @Input() items?: string[];
    @Input() local?: string;

    constructor() {}

    ngOnInit(): void {}
}
