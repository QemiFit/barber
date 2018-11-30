import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the UserProfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-prof',
  templateUrl: 'user-prof.html',
})
export class UserProfPage {

  user;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {

    this.user = auth.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfPage');
    console.log(this.user);
  }

  getUserData(){

  }

}
