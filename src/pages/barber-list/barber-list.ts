import { BookConfirmationPage } from './../book-confirmation/book-confirmation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BarberListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barber-list',
  templateUrl: 'barber-list.html',
})
export class BarberListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarberListPage');
  }

  gotobookcon(){
    this.navCtrl.push(BookConfirmationPage);
  }

}
