import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryIncommingReceivedComponent } from './history-incomming-received.component';

describe('HistoryIncommingReceivedComponent', () => {
  let component: HistoryIncommingReceivedComponent;
  let fixture: ComponentFixture<HistoryIncommingReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryIncommingReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryIncommingReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
