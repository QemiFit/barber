import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookConfirmationPage } from './book-confirmation';

@NgModule({
  declarations: [
    BookConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(BookConfirmationPage),
  ],
})
export class BookConfirmationPageModule {}
