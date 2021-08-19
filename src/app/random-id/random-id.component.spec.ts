import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomIdComponent } from './random-id.component';

describe('RandomIdComponent', () => {
  let component: RandomIdComponent;
  let fixture: ComponentFixture<RandomIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
