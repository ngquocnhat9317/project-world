import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCellComponent } from './world-cell.component';

describe('WorldCellComponent', () => {
  let component: WorldCellComponent;
  let fixture: ComponentFixture<WorldCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
