import React from "react";
import routes from "./routes";
import "./reset.css";
import "./App.css";

//components
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {routes}
      </div>
    </>
  );
}

export default App;
