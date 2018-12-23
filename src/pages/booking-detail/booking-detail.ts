import { TabPage } from './../tab/tab';
import { CustHomePage } from './../cust-home/cust-home';
import { BarberListPage } from './../barber-list/barber-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the BookingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-detail',
  templateUrl: 'booking-detail.html',
})
export class BookingDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingDetailPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Book Success!',
      subTitle: 'Thank you! We will notify you after your barber has responded ',
      buttons: [
        {
          text:'OK',
          handler: data => {
            this.gototab();
          }
        }
      ]
    });
    alert.present();
   
  }

  gototab(){
    this.navCtrl.push(TabPage);
  }
}
