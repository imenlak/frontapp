import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaporteursComponent } from './evaporteurs.component';

describe('EvaporteursComponent', () => {
  let component: EvaporteursComponent;
  let fixture: ComponentFixture<EvaporteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaporteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaporteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
