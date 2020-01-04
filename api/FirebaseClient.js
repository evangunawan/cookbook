import firebase from 'firebase';
import '@firebase/firestore';

console.ignoredYellowBox = ['Setting a timer'];

export async function getProfileDocument(id) {
  const db = firebase.firestore();
  let result = null;
  await db
    .collection('profiles')
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        result = doc.data();
      } else {
        throw 'Document not found';
      }
    });
  return result;
}
