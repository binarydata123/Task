const express = require("express");
const mongoose = require("mongoose"); 
const connectDB = require("./db"); 
const FormData = require("./modal/form-data");
const formRoutes = require("./routes/formRoutes")
const app = express();
const PORT = 4000;
const cors = require("cors"); 

app.use(express.json());
app.use(cors());
connectDB();

app.get('/data', async (req, res) => {
  try {
    let data;
    // Check the role of the user
    if (req.user && req.user.role === 'admin') {
      // Fetch all data for admins
      data = await FormData.find();
      console.log(data)
    } else {
      // Fetch only user data
      data = await FormData.find({ role: 'user' });
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Middleware for sending "hello world" only on the index route
app.get("/api", (req, res) => {
  res.send("hello world");
});

// Routes
app.use("/api", formRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
