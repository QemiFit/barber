import { BarberListPage } from "./../barber-list/barber-list";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthService } from "../../services/auth.service";
import { AngularFireAuth } from "angularfire2/auth";
import { UserService } from "../../services/user.service";
import { FirebaseUserModel } from "../../models/user.model";

/**
 * Generated class for the CustHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-cust-home",
  templateUrl: "cust-home.html"
})
export class CustHomePage {
  user: FirebaseUserModel = new FirebaseUserModel();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthService,
    public userService: UserService,
    public afAuth: AngularFireAuth
  ) {}

  ionViewWillLoad() {
    console.log("ionViewDidLoad CustHomePage");
    this.userService.getCurrentUser().then(
      user => {
        this.user = user;
      },
      err => console.log(err)
    );
    console.log(this.user);
  }

  gotobarberlist() {
    this.navCtrl.push(BarberListPage);
  }
}
