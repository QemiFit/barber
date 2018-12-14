import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewRatingPage } from './review-rating';

@NgModule({
  declarations: [
    ReviewRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewRatingPage),
  ],
})
export class ReviewRatingPageModule {}
