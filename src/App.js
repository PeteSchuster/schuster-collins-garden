import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import Home from "./containers/Home";
import Year2021 from "./containers/Year2021";
import NotFound from "./containers/NotFound";

const App = () => {
  return (
    <Router>
      <div class="app">
        <header class="page-header" role="banner">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/2021">This Year</NavLink>
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
        <footer class="page-footer" role="content-info">
        </footer>
      </div>
    </Router>
  );
};

export default App;
