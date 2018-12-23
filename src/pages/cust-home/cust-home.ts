import { BarberListPage } from './../barber-list/barber-list';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthService } from "../../services/auth.service";
import { AngularFireAuth } from "angularfire2/auth";

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
  user;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthService,
    public afAuth: AngularFireAuth
  ) {
    this.user = auth.getUser();
  }


  ionViewDidLoad() {
    console.log("ionViewDidLoad CustHomePage");
    console.log(this.user);
  }

  gotobarberlist(){
    this.navCtrl.push(BarberListPage);
  }
}
