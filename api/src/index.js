const express = require("express");
// const { PrismaClient } = require("@prisma/client");
const routes = require("./routes");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
// const prisma = new PrismaClient();

app.use(express.json());

app.use("/", routes);

app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
);
