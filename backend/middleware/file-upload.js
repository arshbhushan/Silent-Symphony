import multer from "multer";
import { v1 as uuid } from 'uuid';

const MIME_TYPE_MAP={
  'image/png':'png',
  'image/jpeg':'jpeg',
  'image/jpg': 'jpg',
};

export const fileUpload=multer({
    limits:500000, 
    storage: multer.diskStorage({
       destination :(req,file,callback)=>{
            callback(null,'uploads/images');
       },

       filename:(req,file,callback)=>{
            const ext= MIME_TYPE_MAP[file.mimetype];
            callback(null,uuid()+'.'+ext);
       }

    }),
    fileFilter: (req, file, callback) => {
        const isValid = !!MIME_TYPE_MAP[file.mimetype];
        const error = isValid ? null : new Error('Invalid mime type!');
        callback(error, isValid);
    },
    

});

