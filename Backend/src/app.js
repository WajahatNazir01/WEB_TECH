import express from "express"; // Change require to import
import cors from "cors"; // Change require to import
import authRoutes from "./routes/auth.routes.js"; // Include the .js extension
import { errorHandler } from "./middleware/error.middleware.js"; // Include the .js extension

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Feature Routes
app.use("/api/auth", authRoutes);

// Global Error Handler
app.use(errorHandler);

export default app; // Change module.exports to export default