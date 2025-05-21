import "./App.css";
import EventApp from "./Componets/Events";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to CorteLombarda</h1>
        <h2>A casa ovunque</h2>
        <button
          className="btn"
          onClick={() =>
            window.open("https://www.airbnb.it/rooms/21088488", "_blank")
          }
        >
          Prenota l'intera casa
        </button>
      </header>

      <EventApp />
    </div>
  );
}

export default App;
