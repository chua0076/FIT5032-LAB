/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
const {onRequest} = require("firebase-functions/https");


// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({maxInstances: 10});
admin.initializeApp();
exports.countBooks=onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      res.status(200).send({count});
    } catch (error) {
      console.error("Errpr counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});

exports.addBooks=onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      if (req.method !== "POST") {
        return res.status(405).send("Method must be POST");
      }
      const {isbn, name} = req.body;
      if (!isbn || isNaN(isbn || !name)) {
        return res.status(400).send("Invalid input data");
      }
      const uppercaseName = name.toUpperCase();
      const newBook = await booksCollection.add({
        isbn: isbn,
        name: uppercaseName,
      });

      res.status(200).send(`Book added with ID:${newBook.id}`);
    } catch (error) {
      console.error("Errpr counting books:", error.message);
      res.status(500).send("Error adding books");
    }
  });
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.getAllBooks=onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("Books");
      const snapshot = await booksCollection.get();


      res.status(200).send({snapshot});
    } catch (error) {
      console.error("Errpr counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});
