import express from "express"; // Change require to import
import * as authController from "../controllers/auth.controller.js"; // Include the .js extension

const router = express.Router();

// Route: POST /api/auth/register
router.post("/register", authController.register);

export default router; // Change module.exports to export default