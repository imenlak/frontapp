import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrielsComponent } from './industriels.component';

describe('IndustrielsComponent', () => {
  let component: IndustrielsComponent;
  let fixture: ComponentFixture<IndustrielsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrielsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
