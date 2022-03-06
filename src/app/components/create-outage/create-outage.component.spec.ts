import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOutageComponent } from './create-outage.component';

describe('CreateOutageComponent', () => {
  let component: CreateOutageComponent;
  let fixture: ComponentFixture<CreateOutageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOutageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOutageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
