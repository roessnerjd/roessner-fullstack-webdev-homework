const express = require("express");

const app = express();
const PORT = 3001;

// Save API data to avoid repeated requests
let savedCharacters = null;
let savedLocations = null;

// Home route
app.get("/api/home", (req, res) => {
  res.json({
    message: "Information pulled from Rick & Morty API (only 100 characters).",
  });
});

// Get the first 100 characters
async function getCharacters() {
  if (savedCharacters) {
    return savedCharacters;
  }

  const ids = [];

  for (let i = 1; i <= 100; i += 1) {
    ids.push(i);
  }

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${ids.join(",")}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch characters: ${response.status}`);
  }

  savedCharacters = await response.json();
  return savedCharacters;
}

// Characters route
app.get("/api/characters", async (req, res) => {
  try {
    const characters = await getCharacters();

    const results = characters.map((character) => ({
      id: character.id,
      name: character.name,
      image: character.image,
      species: character.species,
      status: character.status,
    }));

    res.json(results);
  } catch (error) {
    console.error("Characters error:", error);
    res.status(500).json({ error: "Could not load characters" });
  }
});

// Species route
app.get("/api/species", async (req, res) => {
  try {
    const characters = await getCharacters();
    const species = {};

    characters.forEach((character) => {
      const type = character.species;

      if (!species[type]) {
        species[type] = {
          count: 0,
          names: [],
        };
      }

      species[type].count += 1;
      species[type].names.push(character.name);
    });

    res.json(species);
  } catch (error) {
    console.error("Species error:", error);
    res.status(500).json({ error: "Could not load species" });
  }
});

// Locations route
app.get("/api/locations", async (req, res) => {
  try {
    if (!savedLocations) {
      const ids = [];

      for (let i = 1; i <= 100; i += 1) {
        ids.push(i);
      }

      const response = await fetch(
        `https://rickandmortyapi.com/api/location/${ids.join(",")}`,
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch locations: ${response.status}`);
      }

      const locations = await response.json();
      const types = {};

      locations.forEach((location) => {
        const type = location.type;

        if (!types[type]) {
          types[type] = 0;
        }

        types[type] += 1;
      });

      savedLocations = types;
    }

    res.json(savedLocations);
  } catch (error) {
    console.error("Locations error:", error);
    res.status(500).json({ error: "Could not load locations" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
