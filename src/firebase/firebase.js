import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Rent',
//     note:'April',
//     amount: 50000,
//     createdAt: 595645661514
// });

// database.ref('notes/-LT8m6ZUUyIc7RmGUPnW').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//  const val = snapshot.val();
//  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Error fetching data', e);
// })
// database.ref().set({
//     name: 'Joana Oliveira',
//     age: 32,
//     stressLevel: 6,
//     isSingle: false,
//     job: {
//         title:'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         country: 'United States',
//         city: 'Philadelphia'
//     }
// }).then(() => {
//     console.log('data is saved!');
// }).catch((e) => {
//     console.log('this failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company':'Amazon',
//     'location/city':'Seatle'
// });

// database.ref()
//     .remove().then(() => {
//         console.log('Successfully removed')
//     }).catch((e) => {
//         console.log('Error on removing data', e)
//     });
