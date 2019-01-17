import { TabPage } from "./../tab/tab";
import { SignupPage } from "./../signup/signup";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthService } from "../../services/auth.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { AlertController } from "ionic-angular";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public formBuilder: FormBuilder
  ) {}

  ionViewWillLoad() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  tryLogin(value) {
    this.authService.doLogin(value).then(
      res => {
        console.log(res);
        this.navCtrl.push(TabPage);
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
      }
    );
  }

  goRegisterPage() {
    this.navCtrl.push(SignupPage);
  }
}
