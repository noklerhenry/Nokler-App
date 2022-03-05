const express = require("express");
const axios = require('axios');
const { PrismaClient } = require("@prisma/client");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY;

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.use("/", routes);



const server = app.listen(PORT, async () =>{

  const dbVerification = await prisma.Genre.findMany();
  if (dbVerification.length < 1) {
    const apiGenresData = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const preLoadDb = apiGenresData.data.results?.map((genre) => {
      return {
        name: genre.name
      } 
    })
    console.log(preLoadDb)

    for (const g of preLoadDb) {
      await prisma.Genre.create({ data: g })
    }
  }
  
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
});