import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ChooseAccPage} from '../pages/choose-acc/choose-acc';
import {AuthenticatePage} from '../pages/authenticate/authenticate';
import {SignupPage} from '../pages/signup/signup';
import {LoginPage} from '../pages/login/login';
import {CustHomePage} from '../pages/cust-home/cust-home';
import {BarberListPage} from '../pages/barber-list/barber-list';
import {ReceiptPage} from '../pages/receipt/receipt';
import {ReqProcessPage} from '../pages/req-process/req-process';
import {NotifBoxPage} from '../pages/notif-box/notif-box';
import {TransProcessPage} from '../pages/trans-process/trans-process';
import {BookSuccessPage} from '../pages/book-success/book-success';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    ReceiptPage,
    ReqProcessPage,
    NotifBoxPage,
    TransProcessPage,
    BookSuccessPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    ReceiptPage,
    ReqProcessPage,
    NotifBoxPage,
    TransProcessPage,
    BookSuccessPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
