import logo from "./logo.svg";
import "./App.css";
import EventApp from "./Componets/Events";
import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Search,
} from "lucide-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EventApp />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
