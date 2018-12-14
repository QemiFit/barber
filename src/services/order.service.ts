import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { Timestamp } from "../../node_modules/rxjs";
import { ElementSchemaRegistry } from "../../node_modules/@angular/compiler";

// model
interface booking {
  name: string;
  shop: string;
  // distance: number;
  date: Timestamp<any>;
  // addService: Array<any>;
  booker: string;
  grandtotal: number;
  status: number;
}

@Injectable()
export class OrderService {
  book: booking;
  bookname;
  bookdate;
  bookgrandtotal;
  bookshop;
  bookbooker;
  bookstatus;

  constructor() {}

  async getReceipt(receiptID) {
    // firebase method to get data in collection and document
    await firebase
      .firestore()
      .collection("booking")
      .doc(receiptID)
      .get()
      .then(async doc => {
        console.log("document data", doc.data());

        // binding doc data to variable bookdata
        let bookdata =  doc.data();

        this.bookstatus = await bookdata.Status;

        this.bookdate = bookdata.Booking_date;
        this.bookgrandtotal = bookdata.Total_Price;

        console.log(this.bookgrandtotal);
        console.log(this.bookdate);

        // untuk dapatkan data kepada reference dalam document DB
        await bookdata.Barber.get().then(async barberdata => {
          console.log(barberdata.data());

          await barberdata
            .data()
            .shop.get()
            .then(async shopdata => {
              console.log(shopdata.data());

              this.bookshop = await shopdata.data().Name;

              console.log(this.bookshop);
            });

          await barberdata
            .data()
            .userID.get()
            .then(async userdata => {
              console.log(userdata.data());

              this.bookname = await userdata.data().name;

              console.log(this.bookname);
            });
        });

        bookdata.Promotion.get().then(promodata => {
          console.log(promodata.data());
        });

        await bookdata.bookerID.get().then(async bookerdata => {
          console.log(bookerdata.data());

          this.bookbooker = await bookerdata.data().Name; 

          console.log(this.bookbooker);
        });

        // this one untuk pecahkan array
        bookdata.Service.forEach(element => {
          element.get().then(async servdata => {
            console.log(servdata.data());
          });
        });
      })
      .catch(function(error) {
        console.log("error getting document", error);
      });

    console.log(this.bookbooker);

    this.book = {
      name: this.bookname,
      shop: this.bookshop,
      date: this.bookdate,
      grandtotal: this.bookgrandtotal,
      booker: this.bookbooker,
      status: this.bookstatus
    };
    console.log(this.book);
    return this.book;
  }
}
