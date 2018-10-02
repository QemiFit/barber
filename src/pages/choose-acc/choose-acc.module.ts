import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseAccPage } from './choose-acc';

@NgModule({
  declarations: [
    ChooseAccPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseAccPage),
  ],
})
export class ChooseAccPageModule {}
