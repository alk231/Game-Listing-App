import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./Components/Home";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme=='dark'? 'bg-black':null}`}>
        <Header/>
        <Home/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
