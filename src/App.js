import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Age from "./Age";
import Nation from "./Nation";
import Gender from "./Gender";

function App() {
  return (
    <div className="App">
      <header class="app__header">
        <Switch>
          <Route path="/age">
            <Age />
          </Route>
          <Route path="/nation">
            <Nation />
          </Route>
          <Route path="/gender">
            <Gender />
          </Route>
        </Switch>
      </header>
      <main class="app__main">
        <input class="app__input" text="text" placeholder="Type name..." />
        <p>
          <button>Submit</button>
        </p>
      </main>

      <footer class="app__footer">
        <nav class="app__nav">
          <NavLink to="/age">Age</NavLink>
          <NavLink to="/nation">Nation</NavLink>
          <NavLink to="gender">Gender</NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default App;
