import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustHomePage } from './cust-home';

@NgModule({
  declarations: [
    CustHomePage,
  ],
  imports: [
    IonicPageModule.forChild(CustHomePage),
  ],
})
export class CustHomePageModule {}
