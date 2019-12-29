import firebase from 'firebase';
import '@firebase/firestore';
import '@firebase/auth';

class Authentication {
  authWithEmail(){

  }

  async authWithGoogle(idToken, accessToken){
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    try{
      const userCredentials = await firebase.auth().signInWithCredential(credential);
      console.log(userCredentials);
    }catch(err){
      console.log(err.message);
    }
  } 
}

export default new Authentication;