import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticatePage } from '../authenticate/authenticate';
import { AngularFireAuth } from "angularfire2/auth";


/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, private afa: AngularFireAuth) {
  }

  ngOnInit(){
    this.afa.auth.signOut().then(() => {
      this.navCtrl.setRoot(AuthenticatePage);
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
