import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutageMapComponent } from './outage-map.component';

describe('OutageMapComponent', () => {
  let component: OutageMapComponent;
  let fixture: ComponentFixture<OutageMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutageMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutageMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
