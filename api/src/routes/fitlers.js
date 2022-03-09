const express = require("express");
const json = require("../../games.json");
const axios = require("axios");

const app = express();
module.exports = app;

app.get("/", async (req, res) => {
  const { genre, store, platform } = req.query;
  const url = await axios.get(
    "https://api.rawg.io/api/games?key=f5abbf8243b646faab7848436bfd8024"
  );
  const allGames = await url.data.results.map((g) => {
    return {
      id: g.id,
      name: g.name,
      genres: g.genres,
      platforms: g.platforms,
      stores: g.stores,
    };
  });
  let filtered = allGames;
  if (genre) {
    filtered = filtered.filter((g) =>
      g.genres.map((g) => g.name.toLowerCase()).includes(genre.toLowerCase())
    );
  }
  if (store) {
    filtered = filtered.filter((g) =>
      g.stores
        .map((s) => s.store.name.toLowerCase())
        .includes(store.toLowerCase())
    );
  }
  if (platform) {
    filtered = filtered.filter((g) => g.platforms.map(p => p.platform.name.toLowerCase()).includes(platform.toLowerCase()));
  }
  res.send(filtered);
});
