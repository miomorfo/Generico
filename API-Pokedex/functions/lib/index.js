"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send({
        mensaje: 'Hello Pokedex-Generica from Firebase Hosting!!!'
    });
});
//# sourceMappingURL=index.js.map