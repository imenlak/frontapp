import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondenseursComponent } from './condenseurs.component';

describe('CondenseursComponent', () => {
  let component: CondenseursComponent;
  let fixture: ComponentFixture<CondenseursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondenseursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondenseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
