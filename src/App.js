import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chess Game</h1>
      </header>
      <Game></Game>
    </div>
  );
}

export default App;
