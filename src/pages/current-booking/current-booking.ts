import { TabPage } from './../tab/tab';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the CurrentBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-current-booking',
  templateUrl: 'current-booking.html',
})
export class CurrentBookingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentBookingPage');
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Cancel Booking?',
      message: 'Are you sure you want to cancel your booking?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.showAlert();
          }
        }
      ]
    });
    confirm.present();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Your booking has been successfully canceled! Thank you for using our service!',
      buttons: [
        {
          text:'OK',
          handler: () =>{
            this.gototab();
            }
          }
        ]
    });
    setTimeout(()=>alert.present(),3000);
  }

  gototab(){
    this.navCtrl.push(TabPage);
  }
}

