const express = require("express");
const cors = require('cors')
const dotenv = require("dotenv");
dotenv.config();
const routes = require("./routes/routes");
const connectDB = require("./utils/configDB");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
connectDB();
app.use("/", routes);

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}/api`),
);
