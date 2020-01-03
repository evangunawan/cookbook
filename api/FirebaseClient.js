import firebase from 'firebase';
import '@firebase/firestore';

export async function getProfileDocument(id) {
  const db = firebase.firestore();
  db.collection('profiles')
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        throw 'Document not found';
      }
    });
}
