import { TabPage } from "./../tab/tab";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { CustHomePage } from "../cust-home/cust-home";
import { AuthService } from "../../services/auth.service";
import { LoginPage } from "../login/login";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  registerForm: FormGroup;
  errorMessage: string = "";
  successMessage: string = "";

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public formBuilder: FormBuilder
  ) {}

  ionViewWillLoad() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
      name: new FormControl(),
      uname: new FormControl(),
      category: new FormControl()
    });
  }

  tryRegister(value) {
    this.authService.doRegister(value).then(
      res => {
        this.errorMessage = "";
        this.successMessage =
          "Your account has been created. Please log in now.";
      },
      err => {
        this.errorMessage = err.message;
        this.successMessage = "";
      }
    );
  }

  goLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }
}
