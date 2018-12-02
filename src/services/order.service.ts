import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { Timestamp } from "../../node_modules/rxjs";

interface booking {
    name: string;
    shop: string;
    distance: number;
    date: Timestamp<any>;
    addService: Array<any>;
    grandtotal: number;
}


@Injectable()
export class OrderService {
    book: booking;
    constructor() {}

    getReceipt(receiptID) {

        // firebase method to get data in collection and document
        firebase
        .firestore()
        .collection("booking")
        .doc(receiptID)
        .get()
        .then(doc => {
            console.log("document data", doc.data());

            // binding do data to variable bookdata
            let bookdata = doc.data();

            // untuk dapatkan data kepada reference dalam document DB
        bookdata.Barber.get().then(
            barberdata => {
                console.log(barberdata.data());

                barberdata.data().shop.get().then(
                    shopdata => {
                        console.log(shopdata.data());
                    }
                )

                barberdata.data().userID.get().then(
                    userdata => {
                        console.log(userdata.data());
                    }
                )
            }
        )

        bookdata.Promotion.get().then(
            promodata => {
                console.log(promodata.data());
            }
        )

        bookdata.bookerID.get().then(
            bookerdata => {
                console.log(bookerdata.data());
            }
        )

        // this one untuk pecahkan array
        bookdata.Service.forEach(element => {
            element.get().then(
                servdata => {
                    console.log(servdata.data());
                }
            )
        });

        })
        .catch(function(error){
            console.log("error getting document", error);
        });
    
}

}