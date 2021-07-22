import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Age from "./Age";
import Nation from "./Nation";
import Gender from "./Gender";
import InputBar from "./InputBar";
import { useState } from "react";

function App() {
  const [currentName, setCurrentName] = useState("");
  return (
    <div className="App">
      <header className="app__header">Guess...</header>
      <main className="app__main">
        <InputBar onNameChange={(name) => setCurrentName(name)} />
        <div className="app__content--results">
          <Switch>
            <Route path="/age">
              <Age name={currentName} />
            </Route>
            <Route path="/nation">
              <Nation name={currentName} />
            </Route>
            <Route path="/gender">
              <Gender name={currentName} />
            </Route>
          </Switch>
        </div>
      </main>

      <footer className="app__footer">
        <nav className="app__nav">
          <NavLink className="app__color--age" to="/age">
            Age
          </NavLink>
          <NavLink className="app__color--nation" to="/nation">
            Nation
          </NavLink>
          <NavLink className="app__color--gender" to="gender">
            Gender
          </NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default App;
