import { BarberListPage } from "./../barber-list/barber-list";
import { BookingDetailPage } from "./../booking-detail/booking-detail";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { barberlist } from "../../models/barberlist.model";
import { BarberService } from "../../services/barber.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { UserService } from "../../services/user.service";
import { FirebaseUserModel } from "../../models/user.model";
import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the BookConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-book-confirmation",
  templateUrl: "book-confirmation.html"
})
export class BookConfirmationPage {
  user: FirebaseUserModel = new FirebaseUserModel();
  bookconf: FormGroup;
  barberids: any;
  barberdetail: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public barberserv: BarberService,
    public formBuilder: FormBuilder,
    public userService: UserService,
    public afAuth: AngularFireAuth
  ) {
    this.barberids = this.navParams.get("barberid");
    this.bookconf = this.formBuilder.group({
      date: new FormControl(),
      time: new FormControl(),
      category: new FormControl(),
      barberid: new FormControl(),
      userid: new FormControl()
    });
  }

  ionViewWillLoad() {
    console.log("ionViewDidLoad BookConfirmationPage");
    console.log("barberid = " + this.barberids);
    this.barberdetail = this.barberserv.getBabrberDetail(this.barberids);
    console.log(this.barberdetail);
    this.userService.getCurrentUser().then(
      user => {
        this.user = user;
      },
      err => console.log(err)
    );
    console.log(this.user);
  }

  gotobookdtl(bookdtl) {
    this.navCtrl.push(BookingDetailPage, { detail: bookdtl });
  }

  gotobarberlist() {
    this.navCtrl.pop();
  }
}
