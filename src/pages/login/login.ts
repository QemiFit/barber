import { TabPage } from './../tab/tab';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CustHomePage} from '../cust-home/cust-home';
import {AuthService} from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
	loginError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, fb: FormBuilder, public alertCtrl: AlertController) 
  {
    this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submit_login(){
    let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(TabPage),
				error => this.loginError = error.message
			);
	}
	
	signup(){
		
	}
	gotosign(){
    this.navCtrl.push(SignupPage);
	}
	
	
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Forgot password',
      message: "Enter your email. We will send your current password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data =>   {
            this.showAlert();
          }
        }
      ]
    });
    prompt.present();
  }
  
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'We have send your password, open your email!',
      buttons: ['OK']
    });
    setTimeout(()=>alert.present(),3000);
  }
}
	
  


  


