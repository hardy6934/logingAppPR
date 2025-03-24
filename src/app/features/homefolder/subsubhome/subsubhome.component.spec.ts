import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsubhomeComponent } from './subsubhome.component';

describe('SubsubhomeComponent', () => {
  let component: SubsubhomeComponent;
  let fixture: ComponentFixture<SubsubhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsubhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsubhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
