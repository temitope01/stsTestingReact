import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCKZvtRdvWkrQJSjcddMiM2nGZDWA3WNm0',
    authDomain: 'cbt-api-6fa69.firebaseapp.com',
    databaseURL: 'https://cbt-api-6fa69.firebaseio.com/',
    storageBucket: 'gs://cbt-api-6fa69.appspot.com'
};

firebase.initializeApp(config);
const database = firebase.database();

firebase.auth().signInAnonymously().catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
});



 firebase.auth().onAuthStateChanged((user)=> {
    if(user){
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;

        return {
            'uid': uid
        }
    }else{
        return {'uid': null};
    }
 });


export default database;


