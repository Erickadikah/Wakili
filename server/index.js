const express = require("express");
const userRoute = require("./Routes/userRoutes");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['https://wakilifarm.netlify.app', 'http://localhost:5173'],
    credentials: true
})); // Enable CORS for all routes

app.use(morgan("dev")); // Logging middleware

// Routes
app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/", userRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

