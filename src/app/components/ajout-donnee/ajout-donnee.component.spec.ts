import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDonneeComponent } from './ajout-donnee.component';

describe('AjoutDonneeComponent', () => {
  let component: AjoutDonneeComponent;
  let fixture: ComponentFixture<AjoutDonneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutDonneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
