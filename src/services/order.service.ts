import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { Timestamp } from "../../node_modules/rxjs";
import { ElementSchemaRegistry } from "../../node_modules/@angular/compiler";
import { booking } from "../models/booking.model";
import { servicemodel } from "../models/service.model";

@Injectable()
export class OrderService {
  constructor() {}

  getReceipt(receiptID) {
    // firebase method to get data in collection and document
    let bookingState = new booking();
    firebase
      .firestore()
      .collection("booking")
      .doc(receiptID)
      .get()
      .then(doc => {
        let bookdata = doc.data();

        if (bookdata.status == 1) {
          bookingState.status = "incomplete";
        }
        bookingState.date = bookdata.Booking_date;
        bookingState.grandtotal = bookdata.Total_Price;

        // untuk dapatkan data kepada reference dalam document DB
        bookdata.Barber.get().then(barberdata => {
          console.log(barberdata.data());

          barberdata
            .data()
            .shop.get()
            .then(async shopdata => {
              console.log(shopdata.data());

              bookingState.shop = await shopdata.data().Name;
            });

          barberdata
            .data()
            .userID.get()
            .then(async userdata => {
              console.log(userdata.data());

              bookingState.name = userdata.data().name;
            });
        });

        bookdata.Promotion.get().then(promodata => {
          console.log(promodata.data());
        });

        bookdata.bookerID.get().then(bookerdata => {
          console.log(bookerdata.data());

          bookingState.booker = bookerdata.data().name;
        });

        let arrayserv = [];
        // this one untuk pecahkan array
        bookdata.Service.forEach(async element => {
          let servname = await element.get();
          // await arrayserv.concat(servname);
          console.log(servname.data().Name);
          arrayserv.push(servname.data().Name);
          console.log(arrayserv);
          bookingState.addService = arrayserv.toString();
        });

        console.log(bookingState);
      })
      .catch(function(error) {
        console.log("error getting document", error);
      });

    return bookingState;
  }

  getservice(servidarray) {
    let service = [];
    servidarray.forEach(element => {
      let servicemod = new servicemodel();
      firebase
        .firestore()
        .collection("services")
        .doc(element)
        .get()
        .then(res => {
          servicemod.name = res.data().Name;
          servicemod.price = res.data().Price;
        });

      service.push(servicemod);
    });

    return service;
  }
}
