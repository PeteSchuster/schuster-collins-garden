import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import Year2021 from "./pages/Year2021";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <div class="app">
        <header class="page-header" role="banner">
          <nav>
            {[
              { name: "Home", to: "/" },
              { name: "This Year", to: "/2021" },
            ].map(({ name, to }) => (
              <NavLink className="text-black p-2" to={to}>
                {name}
              </NavLink>
            ))}
          </nav>
        </header>
        <main class="page-main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/2021">
              <Year2021 />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
        <footer class="page-footer" role="content-info"></footer>
      </div>
    </Router>
  );
};

export default App;
