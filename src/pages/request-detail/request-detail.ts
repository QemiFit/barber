import { BarberPage } from './../barber/barber';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the RequestDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-detail',
  templateUrl: 'request-detail.html',
})
export class RequestDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestDetailPage');
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Accept Request?',
      message: 'Are you sure you want to accept this request?',
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
      subTitle: 'You have accept the request! We will notify your customer!',
      buttons: [
        {
          text:'OK',
          handler: () =>{
            this.gotobarber();
            }
          }
        ]
    });
    setTimeout(()=>alert.present(),3000);
  }

  gotobarber(){
    this.navCtrl.push(BarberPage);
  }

  showConfirm1() {
    const confirm = this.alertCtrl.create({
      title: 'Reject Request?',
      message: 'Are you sure you want to reject this request?',
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
            this.showAlert1();
          }
        }
      ]
    });
    confirm.present();
  }

  showAlert1() {
    const alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'You have reject the request! We will notify your customer!',
      buttons: [
        {
          text:'OK',
          handler: () =>{
            this.gotobarber();
            }
          }
        ]
    });
    setTimeout(()=>alert.present(),3000);
  }

}
