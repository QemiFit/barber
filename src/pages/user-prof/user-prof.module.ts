import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfPage } from './user-prof';

@NgModule({
  declarations: [
    UserProfPage,
  ],
  imports: [
    IonicPageModule.forChild(UserProfPage),
  ],
})
export class UserProfPageModule {}
