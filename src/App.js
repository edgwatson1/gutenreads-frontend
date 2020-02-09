import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav/Nav";
import Feed from "./Feed/Feed";

function App() {
  return (
    <div className="App">
      <Nav />
      <body>
        <div className="feed-container">
          <h1>Home Feed</h1>
          <Feed />
        </div>
      </body>

      <footer></footer>
    </div>
  );
}

export default App;
