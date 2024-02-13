import express, { response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
// import { FingSpell } from "./module/fingerSpelling.js";
//import fingerSpellingRoutes from './routes/fingerSpellingRoute.js';
import {HttpError} from "./models/http-error.js";
import bodyParser from "body-parser"; 
import cors from 'cors';
import learningsRouters from "./routes/learnings-routes.js";
import usersRouters from "./routes/usersRoutes.js";


const app = express();


// middleware for parsing request body
app.use(express.json());
app.use(cors());
// app.use(router);

app.get('/', (req, res) => {
    console.log(req);
    return res.status(201).send('Home page for the specially-abled kids');
});

app.use(bodyParser.json());
app.use('/finger-spelling',learningsRouters);
app.use('/api/learnings',learningsRouters);
app.use('/api/users',usersRouters);

app.use((req,res,next)=>{
  const error= new HttpError(`Could not find this route `,404);
  throw error;
}); 

app.use((error, req, res, next) => {
  if (res.headersSent) {
      return next(error);
  }

  res.status(error.code || 500)
  res.json({ message: error.message || `An unknown error occurred. ${error}` });
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