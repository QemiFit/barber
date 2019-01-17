import { BarberReviewPage } from "./../barber-review/barber-review";
import { BookConfirmationPage } from "./../book-confirmation/book-confirmation";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BarberService } from "../../services/barber.service";
import { barberlist } from "../../models/barberlist.model";

/**
 * Generated class for the BarberListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-barber-list",
  templateUrl: "barber-list.html"
})
export class BarberListPage {
  barberlists;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public barberserv: BarberService
  ) {}

  ionViewCanEnter() {
    this.barberlists = this.barberserv.listbarber();
    console.log(this.barberlists);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad BarberListPage");
  }

  gotoviewbarber() {
    this.navCtrl.push(BarberReviewPage);
  }

  gotobookcon(barbid) {
    // console.log(barbid);
    this.navCtrl.push(BookConfirmationPage, { barberid: barbid });
  }
}
