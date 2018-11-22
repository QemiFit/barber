import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestore , AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable()
export class AuthService {
	private user: firebase.User;
	userdata: any;
	// userCol: AngularFirestoreCollection<Users>;

	constructor(

		public afAuth: AngularFireAuth, 
		// private afs: AngularFirestore
	
	) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});

		// this.userCol = afs.collection('users');
	}

	signInWithEmail(credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
            credentials.password);
	}
	
	signUp(credentials, profile) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email,credentials.password).then(newUserCredential => {
			firebase.firestore().collection('users').doc(newUserCredential.user.uid).set({
				name: profile.name,
				username: profile.username,
				category: profile.category,
			})
			//   .ref(`/users/${newUserCredential.user.uid}`)
			  
		  });
	}

	getUser() {
		let userdoc = firebase.firestore().collection('users').doc(this.user.uid);
		userdoc.onSnapshot(doc => {

			this.userdata = doc.data();
			console.log(this.userdata);
		  
		  });
		
		  return this.userdata;
  }

}