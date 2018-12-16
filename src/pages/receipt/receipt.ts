import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OrderService} from "../../services/order.service";
import { AngularFireAuth } from "angularfire2/auth";


/**
 * Generated class for the ReceiptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html',
})
export class ReceiptPage implements OnInit{
  booking;
  constructor(public navCtrl: NavController, public navParams: NavParams, private order: OrderService, private afa: AngularFireAuth) {
    // this.booking = order.getReceipt("dPDqhwM7KXT2vkkildE4");
  }

  ngOnInit(){
    this.booking = this.order.getReceipt("dPDqhwM7KXT2vkkildE4");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiptPage');
    console.log(this.booking.name);
  }

}
