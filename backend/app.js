import fs from "fs";
import path from "path";
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
import assignRoleRoutes from "./routes/assignRole-routes.js"
import { log } from "console";
const app = express();


// middleware for parsing request body
app.use(express.json());
// app.use(cors());
// // app.use(router);
// express.static() -> static serving means just returning the file without executing i.
 app.use('/uploads/images',express.static(path.join('uploads','images'))); 

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With, Content-Type,Accept,Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
  next(); 
})

app.get('/', (req, res) => {
  if(req.file){
    //delets the file if there was an error but the image was uploaded
    fs.unlink(req.file.path,(err=>{
      console.log(err);
    }))
  }
    console.log(req);
    return res.status(201).send('Home page for the specially-abled kids');
});

app.use(bodyParser.json());
app.use('/finger-spelling',learningsRouters);
app.use('/api/learnings',learningsRouters);
app.use('/api/users',usersRouters);
app.use('/api/assign-role', assignRoleRoutes);

//router.post('/assign-role', checkAdmin, assignRole);
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

  