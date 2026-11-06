import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Get the current page
  const page = window.location.pathname;
  const route = page === "/" ? "home" : page.substring(1);

  // set initial values for data & error
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  // retrieve data from server, throw error if unable to
  useEffect(() => {
    fetch(`/api/${route}`)
      .then((response) => {
        if (!response.ok) throw new Error("Could not load data");
        return response.json();
      })
      .then((result) => setData(result))
      .catch((err) => setError(err.message));
  }, [route]);

  return (
    <div>
      <h1>Rick & Morty API Info</h1>

      {/* Page links */}
      <nav>
        <a href="/home">Home</a> | <a href="/characters">Characters</a> |{" "}
        <a href="/species">Species</a> | <a href="/locations">Locations</a>
      </nav>

      <hr />

      {/* loading & errors */}
      {error && <p>{error}</p>}
      {!data && !error && <p>Loading...</p>}

      {/* for home page */}
      {data && route === "home" && <h2>{data.message}</h2>}

      {/* for characters page */}
      {data && route === "characters" && (
        <div>
          <h2>Characters ({data.length})</h2>

          <div className="characters">
            {data.map((character) => (
              <div className="character" key={character.id}>
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <p>Species: {character.species}</p>
                <p>Status: {character.status}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* for species page */}
      {data && route === "species" && (
        <div>
          <h2>Species</h2>

          {Object.entries(data).map(([species, info]) => (
            <div key={species}>
              <h3>
                {species} ({info.count})
              </h3>
              <p>{info.names.join(", ")}</p>
            </div>
          ))}
        </div>
      )}

      {/* for locations page */}
      {data && route === "locations" && (
        <div>
          <h2>Locations by Type</h2>

          {Object.entries(data).map(([type, count]) => (
            <p key={type}>
              {type}: {count}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
