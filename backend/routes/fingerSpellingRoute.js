import express  from "express";
import { FingSpell } from "../module/fingerSpelling.js";

const router=express.Router();
// here '/' is the path e.g., http://localhost:5000/


// route to fingerspelling

router.post('/', async (req, res) => {
    try {
        if (!req.body.word || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'Please provide values for word, author, and publishYear in the request body.',
            });
        }

        const newfingSpell = {
            word: req.body.word,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const fingSpell = await FingSpell.create(newfingSpell);
        return res.status(201).send(fingSpell);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});
router.get('/',async (req,res)=>{
    try {
        const fingSpell=await FingSpell.find({});

        return res.status(200).json(
            {count:fingSpell.length,
            data:fingSpell}
            );

        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const fingSpell = await FingSpell.findById(id);

        if (!fingSpell) {
            return res.status(404).json({ message: 'FingerSpelling not found' });
        }

        return res.status(200).json(fingSpell);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for update a word
// Route for updating a finger-spelling
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.word || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'Please provide values for word, author, and publishYear in the request body.',
            });
        }

        const { id } = req.params;  // Corrected typo from 'request' to 'req'
        const result = await FingSpell.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'FingerSpelling not found' });
        }

        res.status(200).send({ message: 'FingerSpelling updated successfully.' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});
//to delete a word.
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await FingSpell.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).json({ message: 'Word not found' });
      }
  
      return res.status(200).send({ message: 'Word deleted successfully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

export default router;