import firebase from 'firebase';
import '@firebase/firestore';
import '@firebase/auth';

class Authentication {
  constructor() {
    console.ignoredYellowBox = ['Setting a timer'];
  }

  async getActiveUser() {
    let result = null;
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        result = user;
      } else {
        throw 'user not found';
      }
    });
    return result;
  }

  //Save new profile info to the firebase.
  async _saveNewProfile(data) {
    const db = firebase.firestore();
    db.collection('profiles')
      .doc(data.user.uid)
      .set({
        email: data.user.email,
        first_name: data.additionalUserInfo.profile.given_name,
        last_name: data.additionalUserInfo.profile.family_name,
        photoURL: data.user.photoURL,
        last_loggedin: Date.now(),
        created_at: Date.now(),
      });
  }

  async createNewUser(email, password) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    }
  }

  authWithEmail() {}

  _isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  async firebaseGoogleAuth(googleUser) {
    var unsubscribe = firebase.auth().onAuthStateChanged(async (firebaseUser) => {
      unsubscribe();
      if (!this._isUserEqual(googleUser, firebaseUser)) {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        try {
          const authResult = await firebase.auth().signInWithCredential(credential);
          if (authResult.additionalUserInfo.isNewUser) {
            this._saveNewProfile(authResult);
          } else {
            //Update user document: lastloggedin
          }
        } catch (err) {
          console.log(err.message);
        }
      }
    });
  }

  firebaseSignOut() {
    firebase.auth().signOut();
  }
}

export default new Authentication();
