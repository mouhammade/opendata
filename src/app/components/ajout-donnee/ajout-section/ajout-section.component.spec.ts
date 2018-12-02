import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSectionComponent } from './ajout-section.component';

describe('AjoutSectionComponent', () => {
  let component: AjoutSectionComponent;
  let fixture: ComponentFixture<AjoutSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
