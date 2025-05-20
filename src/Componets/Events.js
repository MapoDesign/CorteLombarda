import { useState } from "react";
import "./Events.css";

// Componenti icone personalizzati (poiché lucide-react potrebbe non essere installato)
const Calendar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const Clock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MapPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const Search = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="search-icon"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

// Dati di esempio per gli eventi
const eventsData = [
  {
    id: 1,
    title: "Festival della Musica",
    date: "2025-06-15",
    time: "18:00",
    location: "Piazza Maggiore, Bologna",
    description:
      "Un festival musicale con artisti locali e internazionali. Vieni a goderti una serata di musica sotto le stelle.",
    category: "musica",
    image: "/api/placeholder/600/400",
  },
  {
    id: 2,
    title: "Mostra d'Arte Contemporanea",
    date: "2025-06-20",
    time: "10:00",
    location: "Galleria Moderna, Milano",
    description:
      "Esposizione delle opere dei migliori artisti contemporanei italiani. Un'occasione unica per gli amanti dell'arte.",
    category: "arte",
    image: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "Maratona Cittadina",
    date: "2025-07-05",
    time: "08:30",
    location: "Parco centrale, Roma",
    description:
      "La maratona annuale attraverso le strade della capitale. Aperta a corridori di tutti i livelli.",
    category: "sport",
    image: "/api/placeholder/600/400",
  },
  {
    id: 4,
    title: "Conferenza sull'Innovazione",
    date: "2025-07-12",
    time: "14:00",
    location: "Centro Congressi, Torino",
    description:
      "Esperti del settore tecnologico discuteranno le ultime innovazioni e il futuro della tecnologia.",
    category: "tecnologia",
    image: "/api/placeholder/600/400",
  },
  {
    id: 5,
    title: "Festival del Cinema",
    date: "2025-07-25",
    time: "20:00",
    location: "Cinema Aurora, Venezia",
    description:
      "Proiezioni di film indipendenti da tutto il mondo con incontri con registi e attori.",
    category: "spettacolo",
    image: "/api/placeholder/600/400",
  },
];

// Componente Card Evento
const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <img src={event.image} alt={event.title} />
      <div className="event-card-content">
        <h3>{event.title}</h3>
        <div className="event-info">
          <Calendar />
          <span>{new Date(event.date).toLocaleDateString("it-IT")}</span>
        </div>
        <div className="event-info">
          <Clock />
          <span>{event.time}</span>
        </div>
        <div className="event-info">
          <MapPin />
          <span>{event.location}</span>
        </div>
      </div>
      <div className="event-card-footer">
        <span className="event-category">{event.category}</span>
      </div>
    </div>
  );
};

// Componente Dettaglio Evento
const EventDetail = ({ event, onBack }) => {
  return (
    <div className="event-detail">
      <img src={event.image} alt={event.title} />
      <div className="event-detail-content">
        <button onClick={onBack} className="back-button">
          <ChevronLeft />
          <span>Torna alla lista</span>
        </button>
        <h2>{event.title}</h2>
        <div className="event-meta">
          <div className="event-meta-item">
            <Calendar />
            <span>{new Date(event.date).toLocaleDateString("it-IT")}</span>
          </div>
          <div className="event-meta-item">
            <Clock />
            <span>{event.time}</span>
          </div>
          <div className="event-meta-item">
            <MapPin />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="event-description">
          <h3>Descrizione</h3>
          <p>{event.description}</p>
        </div>
        <div
          className="event-category-container"
          style={{ marginBottom: "24px" }}
        >
          <span className="event-category">{event.category}</span>
        </div>
        <button className="book-button">Prenota ora</button>
      </div>
    </div>
  );
};

// Componente filtro eventi
const EventFilter = ({ onSearch, onCategoryChange, activeCategory }) => {
  const categories = [
    "tutti",
    "musica",
    "arte",
    "sport",
    "tecnologia",
    "spettacolo",
  ];

  return (
    <div className="event-filters">
      <div className="search-container">
        <input
          type="text"
          placeholder="Cerca eventi..."
          className="search-input"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Search />
      </div>

      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

// App principale
export default function EventApp() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("tutti");

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "tutti" || event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>EventiApp</h1>
        <p>Scopri gli eventi più interessanti vicino a te</p>
      </header>

      {selectedEvent ? (
        <EventDetail event={selectedEvent} onBack={handleBack} />
      ) : (
        <>
          <EventFilter
            onSearch={setSearchQuery}
            onCategoryChange={setSelectedCategory}
            activeCategory={selectedCategory}
          />

          {filteredEvents.length > 0 ? (
            <div className="events-grid">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={handleSelectEvent}
                />
              ))}
            </div>
          ) : (
            <div className="no-events">
              <p>
                Nessun evento trovato. Prova a modificare i filtri di ricerca.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
