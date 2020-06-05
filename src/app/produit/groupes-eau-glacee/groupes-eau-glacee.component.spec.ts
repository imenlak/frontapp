import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupesEauGlaceeComponent } from './groupes-eau-glacee.component';

describe('GroupesEauGlaceeComponent', () => {
  let component: GroupesEauGlaceeComponent;
  let fixture: ComponentFixture<GroupesEauGlaceeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupesEauGlaceeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupesEauGlaceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
