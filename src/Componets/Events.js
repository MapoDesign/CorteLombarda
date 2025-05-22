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
    id: 12,
    title: "Pizza La Cerasella - 10% di sconto",
    date: "",
    dateEnd: "",
    time: "Orari di apertura variabili",
    location: "Viale Luigi Cadorna, 27, 21052 Busto Arsizio VA",
    description:
      "Cerasella è un ristorante e pizzeria situato a Busto Arsizio, noto per la sua cucina tradizionale italiana e le sue pizze cotte nel forno a legna. Il locale offre un'atmosfera accogliente e un servizio cordiale, rendendolo un luogo ideale per pranzi e cene in famiglia o con amici. Il menu include una varietà di piatti, dalle specialità di carne e pesce a una selezione di antipasti e dolci fatti in casa. Cerasella è anche conosciuta per le sue serate a tema e eventi speciali, che la rendono un punto di riferimento per la ristorazione nella zona. Convenzione del 10% per gli ospiti, portando il volantino.",
    category: ["food", "partnerships"],
    site: "https://lacerasella.com/",
    image:
      "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 12,
    title: "Gita in Barca a vela",
    date: "",
    dateEnd: "",
    time: "Tutto il giorno",
    location: "Lago Maggiore",
    description:
      "Un'esperienza unica per esplorare le bellezze del Lago Maggiore in barca.",
    category: ["nature", "experience"],
    image:
      "https://images.pexels.com/photos/996328/pexels-photo-996328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 11,
    title: "Artigiano in Fiera SUMMER",
    date: "2025-05-29",
    dateEnd: "2025-06-02",
    time: "10:00 - 22:30",
    location: "Fiera Milano Rho",
    description:
      "Artigiano in Fiera Summer è un evento dedicato all'artigianato e alla creatività, che si svolge presso la Fiera Milano Rho. Durante l'evento, i visitatori possono scoprire e acquistare prodotti artigianali provenienti da diverse regioni italiane e da tutto il mondo. L'evento offre anche laboratori, dimostrazioni e spettacoli dal vivo.",
    site: "https://artigianoinfiera.it/?form=check_email&utm_source=newsletter&utm_medium=email&utm_campaign=curiosita_ade25",
    category: ["food", "shopping", "gifts"],
    image:
      "https://saloni.artigianoinfiera.it/storage/img/crops/ab388a4f-664e-4c1d-b1c8-7c49531914b2/hero-af-estate25-dsk__773d2663726f703d253243253243253243.jpg",
  },
  {
    id: 10,
    title: "Abbonamento Musei Lombardia",
    date: "",
    time: "Orari di apertura variabili",
    location: "Tutta la Lombardia",
    description:
      "Abbonamento che consente l'accesso illimitato a 255 musei e luoghi d'arte in Lombardia.",
    site: "https://www.abbonamentomusei.it/",
    category: ["art", "exhibition"],
    image:
      "https://www.regione.lombardia.it/wps/wcm/connect/50f2c011-130b-42e4-8170-c9faf6f9acca/abbonamento+1200x600.jpg?MOD=AJPERES",
  },
  {
    id: 9,
    title: "Forest Bathing Experience",
    date: "",
    time: "Orari di apertura variabili",
    location: "Gita fuori porta nella natura",
    description:
      "Un'esperienza di benessere immersi nella natura, per ritrovare la connessione tra mente e corpo. Contatti: +39 347 2249986.",
    category: ["wellness", "nature", "experience", "sport"],
    site: "https://www.facebook.com/sabbatino.giuseppe",
    image:
      "https://images.pexels.com/photos/8534441/pexels-photo-8534441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 8,
    title: "Busto Vintage Festival",
    date: "2025-05-17",
    time: "11:00 - 20:00",
    location: "In centro, Busto Arsizio",
    description:
      "Sabato 17 maggio, dalle 11.00 alle 20.00, il cuore della città si trasformerà in un incantevole Luna Park d’altri tempi: è in arrivo la prima edizione di Busto Vintage 2025, l’evento che celebra le tradizioni popolari attraverso giochi, sapori e atmosfere autentiche. Un’iniziativa dell’assessorato al Marketing, in collaborazione con il Distretto Commercio Busto Arsizio, per rendere la città viva e attrattiva per giovani e famiglie, un’opportunità di incontro all’insegna del divertimento sano, che permetterà ai bambini di staccarsi per qualche ora da cellulari e tablet, in una giornata, il sabato, in cui gli esercizi commerciali sono aperti e potranno beneficiare della presenza di persone che arriveranno anche da fuori città. Busto Vintage 2025 ( Prima Edizione) , format firmato Marchetti Eventi, porterà in centro città (piazze san Giovanni, Santa Maria e Vittorio Emanuele II e vie limitrofe): una selezione di giochi artigianali in legno: Tiro ai Barattoli, Lancio degli Anelli, Mini Golf, Water Pong, Pesca delle Paperelle, Cornhole e molti altri, realizzati in laboratori artigianali con materiali riciclati per un intrattenimento sostenibile e di qualità – la musica dal vivo, le performance dei Trampolieri, del Mago e del Mangiafuoco e la Ruota della Fortuna che regalerà tantissimi premi – il mercatino degli Hobbisti Vintage e lo street food – il Carosello, il Tiro a Segno Vintage e i tradizionali Carretti Pop Corn e Zucchero Filato Ingresso gratuito – tutte le attività (vedi programma nell’immagine) sono pensate per un pubblico dai 0 ai 100 anni, con aree dedicate ai più piccoli. Un’esperienza immersiva e responsabile: Busto Vintage è eco-friendly, grazie all’uso prevalente di legno e materiali di riciclo.",
    category: ["food"],
    image:
      "https://www.bustoeventi.it/wp-content/uploads/2025/05/Busto-Vintage-e1746715174631.jpg",
  },
  {
    id: 7,
    title: "CENA BRASILIANA",
    date: "2025-05-22",
    time: "dinner",
    location: "Loola, Milano",
    description:
      "Costo 20€ Per info e prenotazioni: +39 375 505 8482 Melissa. Lista Energy https://www.facebook.com/groups/listaenergymilano/ ",
    category: ["food"],
    image:
      "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "APERITIVO REVIVAL",
    date: "2025-05-23",
    time: "from 19:00",
    location: "",
    description:
      "Costo 17€ Per info e prenotazioni: +39 375 505 8482 Melissa. Lista Energy https://www.facebook.com/groups/listaenergymilano/ ",
    category: ["food", "music"],
    image:
      "https://img.freepik.com/foto-gratuito/gruppi-di-giovani-diversi-che-si-uniscono-e-si-godono-il-tempo-insieme-in-un-estetica-da-sogno_23-2151664436.jpg",
  },
  {
    id: 5,
    title: "APERITIVO E DISCOTECA",
    date: "2025-05-24",
    time: "from 19:00",
    location: "Aria Club, Milano",
    description:
      "Costo 15€ Per info e prenotazioni: +39 375 505 8482 Melissa. Lista Energy https://www.facebook.com/groups/listaenergymilano/ ",
    category: ["food", "music"],
    image:
      "https://img.freepik.com/foto-gratuito/gruppi-di-giovani-diversi-che-si-uniscono-e-si-godono-il-tempo-insieme-in-un-estetica-da-sogno_23-2151664436.jpg",
  },
  {
    id: 4,
    title: "APERITIVO",
    date: "2025-05-25",
    time: "from 19:00",
    location: "Just Cavalli, Milano",
    map: "https://maps.app.goo.gl/tfuSStRj5KaBx8Rd9",
    description:
      "Costo 10€ Per info e prenotazioni: +39 375 505 8482 Melissa. Lista Energy https://www.facebook.com/groups/listaenergymilano/ ",
    category: ["food", "music"],
    image:
      "https://img.freepik.com/foto-gratuito/gruppi-di-giovani-diversi-che-si-uniscono-e-si-godono-il-tempo-insieme-in-un-estetica-da-sogno_23-2151664436.jpg",
  },
  {
    id: 3,
    title: "Lidl",
    date: "",
    time: "8:00 - 21:00",
    location: "Via Magenta, 54, 21052 Busto Arsizio VA",
    description:
      "Supermercato discount con una vasta gamma di prodotti alimentari e non alimentari a prezzi competitivi.",
    category: ["supermarket"],
    map: "https://maps.app.goo.gl/ZKwzo9j4ZZUJ7fsD8",
    image: "https://www.lidl.it/static/assets/Ricerca-Filiale-280060.jpg",
  },
  {
    id: 2,
    title: "MD",
    date: "",
    time: "8:30 - 20:30",
    location: "Viale Boccaccio, 30, 21052 Busto Arsizio VA",
    description:
      "Supermercato discount con una vasta gamma di prodotti alimentari e non alimentari a prezzi competitivi.",
    category: ["supermarket"],
    map: "https://maps.app.goo.gl/effwVsiqbuzphjbg7",
    image:
      "https://www.mdspa.it/wp-content/uploads/Schermata-2022-08-10-alle-16.17.52-1-1024x385.png",
  },
  {
    id: 1,
    title: "Esselunga",
    date: "",
    time: "8:00 - 20:00",
    location: "ang. Via Piemonte, Viale Giuseppe Borri, 21053 Castellanza VA",
    description:
      "Supermercato con una vasta gamma di prodotti alimentari e non alimentari, con un'attenzione particolare alla qualità.",
    category: ["supermarket"],
    map: "https://maps.app.goo.gl/44vL6qzJJXkbCTQf6",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.bQ6nKUfLlhq4GN1cH-y30gHaFP&pid=Api",
  },
];

// Componente Card Evento
const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <div className="event-card-content">
        <img src={event.image} alt={event.title} className="event-image" />
        <h3>{event.title}</h3>
        <div className="event-info">
          <Calendar />
          <span>
            {event.date
              ? event.dateEnd
                ? `${new Date(event.date).toLocaleDateString(
                    "it-IT"
                  )} - ${new Date(event.dateEnd).toLocaleDateString("it-IT")}`
                : new Date(event.date).toLocaleDateString("it-IT")
              : "Tutti i giorni"}
          </span>
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
        {Array.isArray(event.category) ? (
          event.category.map((cat, index) => (
            <div key={index} className="event-category">
              {cat}
            </div>
          ))
        ) : (
          <div className="event-category">{event.category}</div>
        )}
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
            <span>
              {event.date
                ? event.dateEnd
                  ? `${new Date(event.date).toLocaleDateString(
                      "it-IT"
                    )} - ${new Date(event.dateEnd).toLocaleDateString("it-IT")}`
                  : new Date(event.date).toLocaleDateString("it-IT")
                : "Tutti i giorni"}
            </span>
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
          <span className="event-category">
            {Array.isArray(event.category) ? (
              event.category.map((cat, index) => (
                <div key={index} className="event-category">
                  {cat}
                </div>
              ))
            ) : (
              <div className="event-category">{event.category}</div>
            )}
          </span>
        </div>
        {event.site ? (
          <a
            href={event.site}
            target="_blank"
            rel="noopener noreferrer"
            className="book-button"
          >
            Vai al sito
          </a>
        ) : (
          ""
        )}
        {event.map ? (
          <a
            href={event.map}
            target="_blank"
            rel="noopener noreferrer"
            className="book-button"
          >
            Visualizza sulla mappa
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

// Componente filtro eventi
const EventFilter = ({ onSearch, onCategoryChange, activeCategory }) => {
  const categories = [
    "all",
    "music",
    "art",
    "sport",
    "technology",
    "theater",
    "experience",
    "partnerships",
    "food",
    "supermarket",
    "wellness",
    "nature",
    "shopping",
    "gifts",
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
      </div>
      <div>
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

const PollsSection = () => {
  // Sostituisci questi con i tuoi link reali
  const polls = [
    {
      id: 1,
      title: "Partecipa al sondaggio universitario sul volontariato",
      url: "ttps://shorturl.at/HIgFZ",
    },
  ];

  return (
    <div className="polls-section" style={{ marginBottom: 32 }}>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {polls.map((poll) => (
          <a
            key={poll.id}
            href={poll.url}
            target="_blank"
            rel="noopener noreferrer"
            className="poll-link"
          >
            {poll.title}
          </a>
        ))}
      </div>
    </div>
  );
};

// App principale
export default function EventApp() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || // Mostra tutti gli eventi se la categoria è "all"
      (Array.isArray(event.category)
        ? event.category.includes(selectedCategory) // Controlla se la categoria è inclusa
        : event.category === selectedCategory);

    // Nascondi eventi passati da più di 3 giorni (solo se hanno una data)
    const today = new Date();
    let isFutureOrRecent = true;
    if (event.date) {
      const eventDate = new Date(event.date);
      // Calcola la differenza in giorni
      const diffTime = today - eventDate;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      isFutureOrRecent = diffDays <= 3;
    }

    return matchesSearch && matchesCategory && isFutureOrRecent;
  });

  // Ordina per data (eventi senza data vanno in fondo)
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(a.date) - new Date(b.date);
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
      <PollsSection />
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
              {sortedEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={handleSelectEvent}
                />
              ))}
            </div>
          ) : (
            <div className="no-events">
              <p>Cooming Soon.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
