import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfExamplePageComponent } from './pdf-example-page.component';

describe('PdfExamplePageComponent', () => {
  let component: PdfExamplePageComponent;
  let fixture: ComponentFixture<PdfExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfExamplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
