import "dotenv/config"; // Already correct for ESM
import app from "./src/app.js"; // Change require to import and include .js

const PORT = process.env.PORT || 5000; // Added fallback port

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});