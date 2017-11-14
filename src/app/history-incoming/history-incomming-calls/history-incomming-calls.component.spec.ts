import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryIncommingCallsComponent } from './history-incomming-calls.component';

describe('HistoryIncommingCallsComponent', () => {
  let component: HistoryIncommingCallsComponent;
  let fixture: ComponentFixture<HistoryIncommingCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryIncommingCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryIncommingCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
