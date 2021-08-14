import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosBoostrapComponent } from './ejemplos-boostrap.component';

describe('EjemplosBoostrapComponent', () => {
  let component: EjemplosBoostrapComponent;
  let fixture: ComponentFixture<EjemplosBoostrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplosBoostrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplosBoostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
