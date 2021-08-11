import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMainContentComponent } from './side-main-content.component';

describe('SideMainContentComponent', () => {
  let component: SideMainContentComponent;
  let fixture: ComponentFixture<SideMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
