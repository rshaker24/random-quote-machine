import { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./App.css";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const colors = [
    "#7246f7",
    "#a31348",
    "#81dcd5",
    "#ee4154",
    "#7158d3",
    "#fba411",
    "#067ecc",
    "#329985",
    "#5cbe17",
    "#0e5944",
    "#67539b",
    "#e26589",
    "#873f51",
    "#b0560f",
    "#13327f",
    "#0f576e",
    "#4ae06e",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const transition = "1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <div
      className="background"
    >
      <div
        id="quote-box"
        style={{ borderColor: randomColor, borderWidth: "4px", transition }}
      >
        <div
          className="quote-content"
          style={{ color: randomColor, transition }}
        >
          <h2 id="text">
            <FaQuoteLeft size="25" style={{ marginRight: "10px" }} />
            {quote.quote}
            <FaQuoteRight size="25" style={{ marginLeft: "10px" }} />
          </h2>
          <h4 id="author"> - {quote.author}</h4>
        </div>
        <div
          className="buttons"
          style={{
            fontFamily:
              "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
          }}
        >
          <a
            href={`https://twitter.com/intent/tweet?hasttags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style={{
              backgroundColor: randomColor,
              marginRight: "10px",
              textDecoration: "none",
              transition,
            }}
          >
            <FaTwitter color="white" style={{ marginRight: "5px" }} />
            Tweet this Quote
          </a>
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ backgroundColor: randomColor, transition }}
          >
            Generate Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
