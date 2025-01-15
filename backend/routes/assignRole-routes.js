import express from "express";
import { assignRole } from "../controllers/AssignRole.js";
import { checkAdmin } from "../middleware/CheckAdmin.js";

const router = express.Router();

router.post('/', checkAdmin, assignRole);

export default router;
