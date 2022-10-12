import React, { useState } from "react";
import "./App.css";
import Content from "./components/content";

const theme = {
  dark: {
    color: "white",
    backgroundColor: "black",
  },
  light: {
    color: "black",
    backgroundColor: "white",
  },
};
export const ThemeData = React.createContext();

function App() {
  const [data, setData] = useState(theme.dark);
  function change() {
    if (theme.dark === data) {
      setData(theme.light);
    } else {
      setData(theme.dark);
    }
  }

  return (
    <div className="App">
      <header>
        <button className={"btn btn-light"} onClick={change}>
          {theme.dark === data ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
      <ThemeData.Provider value={data}>
        <Content />
      </ThemeData.Provider>
    </div>
  );
}

export default App;
