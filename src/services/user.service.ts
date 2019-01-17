import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import * as firebase from "firebase/app";
import { FirebaseUserModel } from "../models/user.model";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
  constructor() {}

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(user) {
        let userModel = new FirebaseUserModel();
        if (user) {
          // userModel.name = user.displayName;
          // userModel.provider = user.providerData[0].providerId;
          firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .get()
            .then(res => {
              userModel.name = res.data().name;
              userModel.uname = res.data().uname;
              userModel.uid = user.uid;

              console.log(userModel);
            })
            .catch(function(error) {
              console.log("error getting document", error);
            });
          return resolve(userModel);
        } else {
          reject("No user logged in");
        }
      });
    });
  }
}
