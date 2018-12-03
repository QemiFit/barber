import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { Timestamp } from "../../node_modules/rxjs";

// model
interface booking {
    name: string;
    shop: string;
    // distance: number;
    date: Timestamp<any>;
    // addService: Array<any>;
    booker: string;
    grandtotal: number;
}


@Injectable()
export class OrderService {
    book: booking;
     bookname;
         bookdate;
         bookgrandtotal;
         bookshop;
         bookbooker;


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

            

            // binding doc data to variable bookdata
            let bookdata = doc.data();

             this.bookdate = bookdata.Booking_date;
             this.bookgrandtotal = bookdata.Total_Price;

            console.log(this.bookgrandtotal);
            console.log(this.bookdate);

            // untuk dapatkan data kepada reference dalam document DB
        bookdata.Barber.get().then(
            barberdata => {
                console.log(barberdata.data());

                barberdata.data().shop.get().then(
                    shopdata => {
                        console.log(shopdata.data());

                          this.bookshop = shopdata.data().Name;

                        console.log(this.bookshop);
                    }
                )

                barberdata.data().userID.get().then(
                    userdata => {
                        console.log(userdata.data());


                        this.bookname = userdata.data().name;

                        console.log(this.bookname);
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

                 this.bookbooker = bookerdata.data().Name;
                
                console.log(this.bookbooker);
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

        console.log(this.bookbooker);

        this.book = {
            name: this.bookname,
            shop: this.bookshop,
            date: this.bookdate,
            grandtotal: this.bookgrandtotal,
            booker: this.bookbooker,
        }
        console.log(this.book);
   return this.book; 
}

}