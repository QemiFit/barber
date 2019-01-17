import { TabPage } from "./../tab/tab";
import { CustHomePage } from "./../cust-home/cust-home";
import { BarberListPage } from "./../barber-list/barber-list";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, DateTime } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { FirebaseUserModel } from "../../models/user.model";
import { booking } from "../../models/booking.model";
import * as firebase from "firebase/app";
import { barberlist } from "../../models/barberlist.model";
import { OrderService } from "../../services/order.service";
import { timestamp } from "rxjs/operators";

/**
 * Generated class for the BookingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-booking-detail",
  templateUrl: "booking-detail.html"
})
export class BookingDetailPage {
  services;
  servref: Array<any> = new Array();
  pricearray: Array<any> = new Array();
  price: number;
  bookdtl: any;
  booker: FirebaseUserModel = new FirebaseUserModel();
  barber: barberlist = new barberlist();
  book: booking = new booking();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public order: OrderService
  ) {
    this.bookdtl = this.navParams.get("detail");
    // console.log(this.bookdtl);
    this.price = 12;
  }

  ionViewWillLoad() {
    console.log("ionViewDidLoad BookingDetailPage");

    //get barber data
    firebase
      .firestore()
      .collection("barber")
      .doc(this.bookdtl.barberid)
      .get()
      .then(res => {
        // console.log(res.data());

        // get barber name
        res
          .data()
          .userID.get()
          .then(element => {
            this.barber.name = element.data().name;
          });

        // get shop name
        res
          .data()
          .shop.get()
          .then(element => {
            this.barber.shop = element.data().Name;
          });
      });

    //get booker data
    firebase
      .firestore()
      .collection("users")
      .doc(this.bookdtl.userid)
      .get()
      .then(res => {
        // console.log(res.data());
        this.booker.name = res.data().name;
      });

    if (this.bookdtl.category) {
      this.services = this.order.getservice(this.bookdtl.category);
      this.bookdtl.category.forEach(element => {
        let servtext = "/services/" + element;
        console.log(servtext);
        this.servref.push(servtext);
      });
    } else {
      this.services = null;
      this.servref = null;
    }

    if (this.services) {
      this.services.forEach(element => {
        // console.log(element.price);
        this.price += element.price;
      });
    }

    // let datetetete = new Date(this.bookdtl.date + " , " + this.bookdtl.time);
    // console.log(datetetete);
    // console.log(this.price);
    // console.log(this.services.price);
  }

  showAlert() {
    firebase
      .firestore()
      .collection("booking")
      .doc()
      .set({
        Barber: "/barber/" + this.bookdtl.barberid,
        Service: this.servref,
        Booking_date: new Date(this.bookdtl.date + " , " + this.bookdtl.time),
        Status: 1,
        total_price: this.price,
        bookerID: "/users/" + this.bookdtl.userid
      });
    const alert = this.alertCtrl.create({
      title: "Book Success!",
      subTitle:
        "Thank you! We will notify you after your barber has responded ",
      buttons: [
        {
          text: "OK",
          handler: data => {
            this.gototab();
          }
        }
      ]
    });
    alert.present();
  }

  gototab() {
    this.navCtrl.push(TabPage);
  }
}
