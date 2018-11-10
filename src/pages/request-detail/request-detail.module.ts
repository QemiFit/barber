import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestDetailPage } from './request-detail';

@NgModule({
  declarations: [
    RequestDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestDetailPage),
  ],
})
export class RequestDetailPageModule {}
