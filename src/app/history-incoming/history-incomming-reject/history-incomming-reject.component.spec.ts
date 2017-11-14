import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryIncommingRejectComponent } from './history-incomming-reject.component';

describe('HistoryIncommingRejectComponent', () => {
  let component: HistoryIncommingRejectComponent;
  let fixture: ComponentFixture<HistoryIncommingRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryIncommingRejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryIncommingRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
