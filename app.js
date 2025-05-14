const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
// Note: Ubah URL koneksi sesuai dengan konfigurasi MongoDB Anda caranya tinggal masuk "mongosh" di terminal
mongoose
  .connect("mongodb://127.0.0.1:27017/CrudPert6", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/items", itemRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
