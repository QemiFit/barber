import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import AuthProvider = firebase.auth.AuthProvider;
import { AngularFireDatabaseModule } from "angularfire2/database";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";

interface User {
  uid: string;
  name: string;
  username: string;
  email: string;
  category: Array<any>;
  age: number;
  occupation: string;
  state: string;
}

@Injectable()
export class AuthService {
  private user: firebase.User;
  userdata: User;
  // userCol: AngularFirestoreCollection<Users>;

  constructor(
    public afAuth: AngularFireAuth // private afs: AngularFirestore
  ) {
    afAuth.authState.subscribe(user => {
      this.user = user;
      // console.log(user);

      // console.log(this.user);
if(this.user !== null){
      firebase
        .firestore()
        .collection("users")
        .doc(this.user.uid)
        .get()
        .then(doc => {
          if (doc.exists) {
            console.log("document data", doc.data());
            this.userdata = {
              uid: this.user.uid,
              name: doc.data().name,
              username: doc.data().username,
              email: this.user.email,
              category: doc.data().category,
              age: doc.data().Age,
              occupation: doc.data().Occupation,
              state: doc.data().State,
            };
          } else {
            console.log("no such document");
          }
        })
        .catch(function(error) {
          console.log("error getting document", error);
        });
    }
    });

    // this.userCol = afs.collection('users');
  }

  signInWithEmail(credentials) {
    console.log("Sign in with email");
    return this.afAuth.auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  signUp(credentials, profile) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(newUserCredential => {
        firebase
          .firestore()
          .collection("users")
          .doc(newUserCredential.user.uid)
          .set({
            name: profile.name,
            username: profile.username,
            category: profile.category
          });
        //   .ref(`/users/${newUserCredential.user.uid}`)
      });
  }

  getUser() {
    console.log(this.userdata);
    console.log(this.user);
    return this.userdata;
  }
}
