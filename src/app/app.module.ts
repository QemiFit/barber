import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { ChooseAccPage } from "../pages/choose-acc/choose-acc";
import { AuthenticatePage } from "../pages/authenticate/authenticate";
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";
import { CustHomePage } from "../pages/cust-home/cust-home";
import { BarberListPage } from "../pages/barber-list/barber-list";
import {BarberReviewPage} from "../pages/barber-review/barber-review";
import { BookConfirmationPage } from "../pages/book-confirmation/book-confirmation";
import{BookingDetailPage} from "../pages/booking-detail/booking-detail";
import {BookingListPage} from "../pages/booking-list/booking-list";
import {CurrentBookingPage} from "../pages/current-booking/current-booking";
import { ReceiptPage } from "../pages/receipt/receipt";
import {ReviewRatingPage} from "../pages/review-rating/review-rating";
import { TrendingPage } from "../pages/trending/trending";
import { PhotoReviewPage } from "../pages/photo-review/photo-review";
import { UserProfPage } from "../pages/user-prof/user-prof";
import {EditProfilePage} from "../pages/edit-profile/edit-profile";
import { BarbHomePage } from "../pages/barb-home/barb-home";
import { RequestListPage } from "../pages/request-list/request-list";
import { RequestDetailPage } from "../pages/request-detail/request-detail";
import {BarberProfilePage} from "../pages/barber-profile/barber-profile";
import { LogoutPage} from "../pages/logout/logout";
import {TabPage} from "../pages/tab/tab";
import {BarberPage} from "../pages/barber/barber";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabaseModule } from "angularfire2/database";
// import { AngularFirestore} from 'angularfire2/firestore';
import { firebaseConfig } from "../config";
import { AuthService } from "../services/auth.service";
import { OrderService } from "../services/order.service";
import { NgxErrorsModule } from "@ultimate/ngxerrors";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ChooseAccPage,
    AuthenticatePage,
    SignupPage,
    LoginPage,
    CustHomePage,
    BarberListPage,
    BarberReviewPage,
    BookConfirmationPage,
    BookingDetailPage,
    BookingListPage,
    CurrentBookingPage,
    ReceiptPage,
    ReviewRatingPage,
    TrendingPage,
    PhotoReviewPage,
    UserProfPage,
    EditProfilePage,
    BarbHomePage,
    RequestListPage,
    RequestDetailPage,
    BarberProfilePage,
    LogoutPage,
    TabPage,
    BarberPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    NgxErrorsModule,
    AngularFirestoreModule
    // AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ChooseAccPage,
    AuthenticatePage,
    SignupPage,
    LoginPage,
    CustHomePage,
    BarberListPage,
    BarberReviewPage,
    BookConfirmationPage,
    BookingDetailPage,
    BookingListPage,
    CurrentBookingPage,
    ReceiptPage,
    ReviewRatingPage,
    TrendingPage,
    PhotoReviewPage,
    UserProfPage,
    EditProfilePage,
    BarbHomePage,
    RequestListPage,
    RequestDetailPage,
    BarberProfilePage,
    LogoutPage,
    TabPage,
    BarberPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    AuthService,
    OrderService
    // AngularFirestore
  ]
})
export class AppModule {}
