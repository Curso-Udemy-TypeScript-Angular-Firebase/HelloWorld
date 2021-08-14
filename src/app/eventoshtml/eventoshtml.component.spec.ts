import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoshtmlComponent } from './eventoshtml.component';

describe('EventoshtmlComponent', () => {
  let component: EventoshtmlComponent;
  let fixture: ComponentFixture<EventoshtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoshtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoshtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
