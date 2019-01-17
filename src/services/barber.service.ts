import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import * as firebase from "firebase/app";
import { barberlist } from "../models/barberlist.model";
import { Observable } from "rxjs";

@Injectable()
export class BarberService {
  barbobs: Observable<any>;
  constructor() {}

  listbarber() {
    let barberlisting = [];

    firebase
      .firestore()
      .collection("barber")
      .get()
      .then(async res => {
        await res.forEach(async element => {
          let barbermodel = new barberlist();
          // console.log(element.id);
          barbermodel.barberid = await element.id;

          //get shop name
          await element
            .data()
            .shop.get()
            .then(async res => {
              // console.log(res.data());
              barbermodel.shop = await res.data().Name;
            });

          //get barber name

          await element
            .data()
            .userID.get()
            .then(async res => {
              // console.log(res.data());
              barbermodel.name = await res.data().name;
            });

          // console.log(barbermodel);
          barberlisting.push(barbermodel);
        });
      });

    console.log(barberlisting);

    return barberlisting;
  }

  getBabrberDetail(barbid) {
    let barbdetail = new barberlist();
    firebase
      .firestore()
      .collection("barber")
      .doc(barbid)
      .get()
      .then(async res => {
        // console.log(res.data());

        barbdetail.barberid = barbid;

        //get shop name
        res
          .data()
          .shop.get()
          .then(async element => {
            // console.log(element.data());

            barbdetail.shop = await element.data().Name;
          });

        //get barber name
        res
          .data()
          .userID.get()
          .then(async element => {
            // console.log(element.data());

            barbdetail.name = await element.data().name;
          });
      });

    return barbdetail;
  }
}
