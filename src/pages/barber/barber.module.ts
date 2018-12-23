import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberPage } from './barber';

@NgModule({
  declarations: [
    BarberPage,
  ],
  imports: [
    IonicPageModule.forChild(BarberPage),
  ],
})
export class BarberPageModule {}
