import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoReviewPage } from './photo-review';

@NgModule({
  declarations: [
    PhotoReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoReviewPage),
  ],
})
export class PhotoReviewPageModule {}
