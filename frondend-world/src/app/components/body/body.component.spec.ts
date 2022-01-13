import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
    let component: BodyComponent;
    let fixture: ComponentFixture<BodyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BodyComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have as leftSideItems is a list string [\'Terrain\', \'Resource\']', () => {
        const fixture = TestBed.createComponent(BodyComponent);
        const body = fixture.componentInstance;
        expect(body.leftSideItems).toEqual(['Terrain', 'Resource']);
    })

    it('should have as rightSideItems is a list string [\'People\', \'Person\']', () => {
        const fixture = TestBed.createComponent(BodyComponent);
        const body = fixture.componentInstance;
        expect(body.rightSideItems).toEqual(['People', 'Person']);
    })
});
