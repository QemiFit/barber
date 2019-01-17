import { Timestamp } from "../../node_modules/rxjs";
import { DateTime } from "ionic-angular";

export class booking {
  name: string;
  shop: string;
  // distance: number;
  date: Date;
  addService: string;
  booker: string;
  grandtotal: number;
  status: string;

  constructor() {
    this.name = "";
    this.shop = "";
    this.date = new Date();
    this.booker = "";
    this.addService = "";
    this.grandtotal = 0;
    this.status = "uncomplete";
  }
}
