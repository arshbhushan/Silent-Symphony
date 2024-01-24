import express, { response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
// import { FingSpell } from "./module/fingerSpelling.js";
import fingerSpellingRoutes from './routes/fingerSpellingRoute.js'
const app = express();

// middleware for parsing request body
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(201).send('Home page for the specially-abled kids');
});

app.use('/finger-spelling',fingerSpellingRoutes)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });