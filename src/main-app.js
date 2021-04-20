import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PageHeader from "./common/page-header.js";
import HomePage from "./home/home-page.js";
import AllGamesPage from "./all-games/all-games-page.js";
import MyGamesPage from "./my-games/my-games-page.js";
import AddGame from "./my-games/add-game.js";
import "./app.css";
import GameDetails from "./game-details/game-details.js";
import AddGameSearch from "./my-games/add-game-search.js";

import { auth } from "./data/firebase";
import { useState, useEffect } from "react";

function AuthenicatedRoute(props) {
  const { isAuthenticated, children, ...routeProps } = props;
  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to="/" />}{" "}
    </Route>
  );
}
function App() {
  const [user, setUser] = useState(null);
  const isAuthenticated = user !== null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <PageHeader user={user}></PageHeader>

      <Switch>
        <Route path="/" exact>
          <HomePage user={user} />
        </Route>

        <AuthenicatedRoute path="/all-games">
          <AllGamesPage user={user} isAuthenticated={isAuthenticated} />
        </AuthenicatedRoute>

        <AuthenicatedRoute path="/my-games">
          <MyGamesPage user={user} isAuthenticated={isAuthenticated} />
        </AuthenicatedRoute>

        <AuthenicatedRoute path="/add-game/:slug">
          <AddGame user={user} isAuthenticated={isAuthenticated} />
        </AuthenicatedRoute>

        <AuthenicatedRoute path="/add-game-search/:slug">
          <AddGameSearch user={user} isAuthenticated={isAuthenticated} />
        </AuthenicatedRoute>

        <Route path="/game-details/:slug">
          <GameDetails user={user} isAuthenticated={isAuthenticated} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
