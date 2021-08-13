import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpComponent } from './string-interp.component';

describe('StringInterpComponent', () => {
  let component: StringInterpComponent;
  let fixture: ComponentFixture<StringInterpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringInterpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringInterpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
