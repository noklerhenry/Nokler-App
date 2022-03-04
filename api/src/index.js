const express = require("express");
const axios = require('axios');
const { PrismaClient } = require("@prisma/client");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.use("/", routes);



const server = app.listen(PORT, async () =>{

  const dbVerification = await prisma.Genre.findMany();
  if (dbVerification.length < 1) {
    const apiGenresData = await axios.get('https://api.rawg.io/api/genres?key=8cf0a627fd28494d83d70c624ec46fb7')
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