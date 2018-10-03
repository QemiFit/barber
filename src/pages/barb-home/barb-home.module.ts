import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarbHomePage } from './barb-home';

@NgModule({
  declarations: [
    BarbHomePage,
  ],
  imports: [
    IonicPageModule.forChild(BarbHomePage),
  ],
})
export class BarbHomePageModule {}
