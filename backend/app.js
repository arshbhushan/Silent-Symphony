import express, { response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
// import { FingSpell } from "./module/fingerSpelling.js";
//import fingerSpellingRoutes from './routes/fingerSpellingRoute.js';
//import HttpError from "./module/http-error.js";
//import bodyParser from "body-parser"; 
import cors from 'cors';
import router from "./routes/learnings-routes.js";



const app = express();

// middleware for parsing request body
app.use(express.json());
app.use(cors());
app.use(router);

app.get('/', (req, res) => {
    console.log(req);
    return res.status(201).send('Home page for the specially-abled kids');
});

app.use('/finger-spelling',router)
app.use('/api/learnings',router)

app.use((error, req, res, next) => {
  if (res.headersSent) {
      return next(error);
  }

  res.status(error.code || 500).json({ message: error.message || `An unknown error occurred. ${error}` });
});


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