const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const authRoutes = require("./routes/api/auth");
const userRoutes = require("./routes/api/users");
const productRoutes = require("./routes/api/products");
const orderRoutes = require("./routes/api/orders");
const routes = require("./routes/routes");
const connectDB = require("./utils/configDB");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.get("/api", (req, res) => {
  res.send("Welcome to our server!!");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname,  "client", "build", "index.html"));
});

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}/api`),
);
