import express from "express";
import { FingSpell } from "../module/fingerSpelling.js";

const router = express.Router();

// Route to fingerspelling
router.post('/', async (req, res) => {
    try {
        // Check for required fields
        if (!req.body.Alphabet || !req.body.handShape || !req.body.videoUrl || !req.body.mnemonicTips) {
            return res.status(400).send({
                message: 'Please provide values for Alphabet, handShape, videoUrl, and mnemonicTips in the request body.',
            });
        }

        const newfingSpell = {
            Alphabet: req.body.Alphabet,
            handshape: req.body.handShape,
            videoUrl: req.body.videoUrl,
            mnemonicTips: req.body.mnemonicTips,
        };

        const fingSpell = await FingSpell.create(newfingSpell);

        // Return only necessary information
        return res.status(201).send({
            Alphabet: fingSpell.Alphabet,
            handshape: fingSpell.handshape,
            videoUrl: fingSpell.videoUrl,
            mnemonicTips: fingSpell.mnemonicTips,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for getting all finger-spellings
router.get('/', async (req, res) => {
    try {
        const fingSpell = await FingSpell.find({});

        return res.status(200).json({
            count: fingSpell.length,
            data: fingSpell
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for getting a specific finger-spelling by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const fingSpell = await FingSpell.findById(id);

        if (!fingSpell) {
            return res.status(404).json({ message: 'FingerSpelling not found' });
        }

        return res.status(200).json({
            Alphabet: fingSpell.Alphabet,
            handshape: fingSpell.handshape,
            videoUrl: fingSpell.videoUrl,
            mnemonicTips: fingSpell.mnemonicTips,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for updating a finger-spelling
router.put("/:id", async (req, res) => {
    try {
        // Check for required fields
        if (!req.body.Alphabet || !req.body.handShape || !req.body.videoUrl || !req.body.mnemonicTips) {
            return res.status(400).send({
                message: 'Please provide values for Alphabet, handShape, videoUrl, and mnemonicTips in the request body.',
            });
        }

        const { id } = req.params;
        const result = await FingSpell.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) {
            return res.status(404).json({ message: 'FingerSpelling not found' });
        }

        res.status(200).send({
            Alphabet: result.Alphabet,
            handshape: result.handshape,
            videoUrl: result.videoUrl,
            mnemonicTips: result.mnemonicTips,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to delete a finger-spelling
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await FingSpell.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'FingerSpelling not found' });
        }

        return res.status(200).send({ message: 'FingerSpelling deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
