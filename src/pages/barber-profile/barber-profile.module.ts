import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberProfilePage } from './barber-profile';

@NgModule({
  declarations: [
    BarberProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(BarberProfilePage),
  ],
})
export class BarberProfilePageModule {}
