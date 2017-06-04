import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmCalendar2DemoComponent } from './gm-calendar2-demo.component';

describe('GmCalendar2DemoComponent', () => {
  let component: GmCalendar2DemoComponent;
  let fixture: ComponentFixture<GmCalendar2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmCalendar2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmCalendar2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
