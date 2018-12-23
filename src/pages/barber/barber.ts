import { RequestListPage } from './../request-list/request-list';
import { BarberProfilePage } from './../barber-profile/barber-profile';
import { BarbHomePage } from './../barb-home/barb-home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BarberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barber',
  templateUrl: 'barber.html',
  template: `
  <ion-tabs>
    <ion-tab tabIcon="home" [root]="tab1" tabTitle="Home" ></ion-tab>
    <ion-tab tabIcon="contact" [root]="tab2" tabTitle="Profile" ></ion-tab>
    <ion-tab tabIcon="list-box" [root]="tab3" tabTitle="Request" ></ion-tab>


  </ion-tabs>`,
})
export class BarberPage {
  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = BarbHomePage;
    this.tab2 = BarberProfilePage;
    this.tab3 = RequestListPage;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarberPage');
  }

}
