import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarberListPage } from './barber-list';

@NgModule({
  declarations: [
    BarberListPage,
  ],
  imports: [
    IonicPageModule.forChild(BarberListPage),
  ],
})
export class BarberListPageModule {}
