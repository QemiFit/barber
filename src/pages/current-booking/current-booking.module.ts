import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentBookingPage } from './current-booking';

@NgModule({
  declarations: [
    CurrentBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentBookingPage),
  ],
})
export class CurrentBookingPageModule {}
