import firebase from 'firebase'





const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyDxr0P_BDNNlEIamREMQddfUIyCMXlAohM',
    authDomain: 'hibrido-732ce.firebaseapp.com',
    databaseURL: 'https://hibrido-732ce.firebaseio.com',
    projectId: 'hibrido-732ce',
    storageBucket: '',
    messagingSenderId: '89559752600',
    appId: '1:89559752600:web:831073a06538676a'

});

const db = firebaseApp.firestore();

export { db };