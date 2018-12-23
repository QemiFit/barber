import { TabPage } from './../tab/tab';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustHomePage} from '../cust-home/cust-home';
import {AuthService} from '../../services/auth.service'

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupError: string;
	form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, private auth: AuthService) {

    this.form = fb.group({
      name: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
			email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      category: ['', Validators.compose([Validators.required])],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  submit_signup() {

    let data = this.form.value;
		let credentials = {
			email: data.email,
      password: data.password
      };

      let profile ={
        name: data.name,
        username: data.username,
        category: data.category
      };
    
		this.auth.signUp(credentials, profile).then(
			() => this.navCtrl.setRoot(TabPage),
			error => this.signupError = error.message
		);
  }

  category(){
    
  }
  
}
