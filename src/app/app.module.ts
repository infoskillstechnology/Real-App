import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryIncommingCallsComponent } from './history-incoming/history-incomming-calls/history-incomming-calls.component';
import { HistoryIncommingReceivedComponent } from './history-incoming/history-incomming-received/history-incomming-received.component';
import { HistoryIncommingRejectComponent } from './history-incoming/history-incomming-reject/history-incomming-reject.component';


@NgModule({
  declarations: [
    AppComponent,
    HistoryIncommingCallsComponent,
    HistoryIncommingReceivedComponent,
    HistoryIncommingRejectComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
