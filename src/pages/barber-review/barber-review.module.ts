import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberReviewPage } from './barber-review';

@NgModule({
  declarations: [
    BarberReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(BarberReviewPage),
  ],
})
export class BarberReviewPageModule {}
