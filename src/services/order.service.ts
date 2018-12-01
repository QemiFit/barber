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
        firebase
        .firestore()
        .collection("booking")
        .doc(receiptID)
        .get()
        .then(doc => {
            console.log("document data", doc.data());
            let bookdata = doc.data();

                bookdata.barber.get().then(barberdoc => {
                    console.log("barber detail", barberdoc.data());
                });
            
        
               
            

        })
        .catch(function(error){
            console.log("error getting document", error);
        });
    
}

}