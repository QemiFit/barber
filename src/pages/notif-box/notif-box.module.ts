import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotifBoxPage } from './notif-box';

@NgModule({
  declarations: [
    NotifBoxPage,
  ],
  imports: [
    IonicPageModule.forChild(NotifBoxPage),
  ],
})
export class NotifBoxPageModule {}
