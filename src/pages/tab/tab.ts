import { BookingListPage } from './../booking-list/booking-list';
import { UserProfPage } from './../user-prof/user-prof';
import { TrendingPage } from './../trending/trending';
import { CustHomePage } from './../cust-home/cust-home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
  template: `
  <ion-tabs>
    <ion-tab tabIcon="home" [root]="tab1" tabTitle="Home" ></ion-tab>
    <ion-tab tabIcon="md-photos" [root]="tab2" tabTitle="Trending" ></ion-tab>
    <ion-tab tabIcon="contact" [root]="tab3" tabTitle="Profile" ></ion-tab>
    <ion-tab tabIcon="book" [root]="tab4" tabTitle="Booking" ></ion-tab>


  </ion-tabs>`,
})
export class TabPage {
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = CustHomePage;
    this.tab2 = TrendingPage;
    this.tab3 = UserProfPage;
    this.tab4 = BookingListPage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
