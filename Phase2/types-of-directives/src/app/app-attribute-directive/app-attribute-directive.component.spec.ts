import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAttributeDirectiveComponent } from './app-attribute-directive.component';

describe('AppAttributeDirectiveComponent', () => {
  let component: AppAttributeDirectiveComponent;
  let fixture: ComponentFixture<AppAttributeDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAttributeDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAttributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
