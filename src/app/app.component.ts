import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { ChooseAccPage } from "../pages/choose-acc/choose-acc";
import { AuthenticatePage } from "../pages/authenticate/authenticate";
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";
import { CustHomePage } from "../pages/cust-home/cust-home";
import { BarberListPage } from "../pages/barber-list/barber-list";
import { BookConfirmationPage } from "../pages/book-confirmation/book-confirmation";
import {BookingDetailPage} from "../pages/booking-detail/booking-detail";
import {BookingListPage} from "../pages/booking-list/booking-list";
import {CurrentBookingPage} from "../pages/current-booking/current-booking";
import { ReceiptPage } from "../pages/receipt/receipt";
import {ReviewRatingPage} from "../pages/review-rating/review-rating";
import { TrendingPage } from "../pages/trending/trending";
import { PhotoReviewPage } from "../pages/photo-review/photo-review";
import { UserProfPage } from "../pages/user-prof/user-prof";
import { BarbHomePage } from "../pages/barb-home/barb-home";
import { RequestListPage } from "../pages/request-list/request-list";
import { RequestDetailPage } from "../pages/request-detail/request-detail";
import { AuthService } from "../services/auth.service";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string; component: any }>;

  user: any; 

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private auth: AuthService
  ) {
    this.initializeApp();

    this.auth;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Home", component: HomePage },
      { title: "List", component: ListPage },
      { title: "Choose_Acc", component: ChooseAccPage },
      { title: "Authenticate", component: AuthenticatePage },
      { title: "Signup", component: SignupPage },
      { title: "Login", component: LoginPage },
      { title: "Cust_Home", component: CustHomePage },
      { title: "Barber_List", component: BarberListPage },
      { title: "Book_Confirmation", component: BookConfirmationPage },
      { title: "Booking Detail", component: BookingDetailPage },
      { title: "Booking List", component: BookingListPage },
      { title: "Current Booking", component: CurrentBookingPage },
      { title: "Receipt", component: ReceiptPage },
      { title: "Review Rating", component: ReviewRatingPage },
      { title: "Trending", component: TrendingPage },
      { title: "Photo_Review", component: PhotoReviewPage },
      { title: "User_Prof", component: UserProfPage },
      { title: "Barb_Home", component: BarbHomePage },
      { title: "Request_List", component: RequestListPage },
      { title: "Request_Detail", component: RequestDetailPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
