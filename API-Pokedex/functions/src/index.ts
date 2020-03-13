import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const  serviceAccount = require("./servicesAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pokedex-generica.firebaseio.com"
  });

const db = admin.firestore();


export const helloWorld = functions.https.onRequest((request, response) => {
 response.send({
     mensaje: 'Hello Pokedex-Generica from Firebase Hosting!!!'
 });
});


export const GetPokemon = functions.https.onRequest( async(request, response) => {

const pokeRef = db.collection('pokedex-kanto');
const docsSanp = await pokeRef.get();

const pokeAll = docsSanp.docs.map( doc => doc.data())

response.json(pokeAll);
});