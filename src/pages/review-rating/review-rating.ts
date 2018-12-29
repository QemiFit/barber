import { BookingListPage } from './../booking-list/booking-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the ReviewRatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-rating',
  templateUrl: 'review-rating.html',
})
export class ReviewRatingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewRatingPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Thank You!',
      subTitle: 'Your review has been submitted! Thank you for using our service!',
      buttons: [
        {
          text:'OK',
          handler: () =>{
            this.gotobooklist();
            }
          }
        ]
    });
    alert.present();
  }

  gotobooklist(){
    this.navCtrl.push(BookingListPage);
  }

}
