"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./servicesAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pokedex-generica.firebaseio.com"
});
const db = admin.firestore();
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send({
        mensaje: 'Hello Pokedex-Generica from Firebase Hosting!!!'
    });
});
exports.GetPokemon = functions.https.onRequest(async (request, response) => {
    const pokeRef = db.collection('pokedex-kanto');
    const docsSanp = await pokeRef.get();
    const pokeAll = docsSanp.docs.map(doc => doc.data());
    response.json(pokeAll);
});
//# sourceMappingURL=index.js.map