import React from "react";
import "./style.css";
// const [apiKey, setApiKey] = useState("AIzaSyBoNwkmORDAnIhH3eNfPQbdNZjL1JJs_lk");

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>React Books</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://www.googleapis.com/books/v1/volumes?q=search+terms">
        Powered by Google Books
      </a>
    </div>
  );
}

export default Jumbotron;
