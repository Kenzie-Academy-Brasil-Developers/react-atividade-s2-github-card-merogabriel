import "./App.css";
import { useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";

function App() {
  const [input, setInput] = useState("");
  const [repo, setRepo] = useState([]);
  const [error, setError] = useState(false);

  function search() {
    axios
      .get(`https://api.github.com/repos/${input}`)
      .then((response) => setRepo([...repo, response.data]), setError(false))
      .catch((err) => setError(true));
  }

  function handleEmpty(data) {
    if (data !== "") {
      setInput(data);
    }
  }
  console.log(repo);
  return (
    <div className="App">
      <input
        placeholder="Pesquise o repositorio"
        onChange={(e) => handleEmpty(e.target.value)}
      ></input>
      <button type="button" onClick={search}>
        Pesquisar
      </button>
      {error ? (
        <span className="error">Falha em encontrar repositorio.</span>
      ) : null}
      <Cards repo={repo} />
    </div>
  );
}

export default App;
