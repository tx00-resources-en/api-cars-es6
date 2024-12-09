import express from "express";
import carRouter from "./routes/carRouter.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use the carRouter for all /cars routes
app.use("/api/cars", carRouter);

const port = 4000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
