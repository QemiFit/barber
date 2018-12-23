import { BarberListPage } from './../barber-list/barber-list';
import { BookingDetailPage } from './../booking-detail/booking-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-confirmation',
  templateUrl: 'book-confirmation.html',
})
export class BookConfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookConfirmationPage');
  }

gotobookdtl(){
  this.navCtrl.push(BookingDetailPage);
}

gotobarberlist(){
  this.navCtrl.push(BarberListPage);
}

}
