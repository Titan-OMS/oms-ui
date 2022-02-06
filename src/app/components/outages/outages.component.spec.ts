import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutagesComponent } from './outages.component';

describe('HomeComponent', () => {
  let component: OutagesComponent;
  let fixture: ComponentFixture<OutagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
