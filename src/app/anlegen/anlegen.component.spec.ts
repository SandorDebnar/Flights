import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnlegenComponent } from './anlegen.component';

describe('AnlegenComponent', () => {
  let component: AnlegenComponent;
  let fixture: ComponentFixture<AnlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnlegenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
