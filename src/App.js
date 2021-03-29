import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import PageHeader from "./common/page-header.js";
import HomePage from "./home/home-page.js";
import AllGamesPage from "./all-games/all-games-page.js";
import MyGamesPage from "./my-games/my-games-page.js";
import AddGame from "./my-games/add-game.js";

function App() {
  return (
    <BrowserRouter>
      <PageHeader></PageHeader>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/all-games">
          <AllGamesPage />
        </Route>
        <Route path="/my-games">
          <MyGamesPage />
        </Route>
        <Route path="/add-game">
          <AddGame />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
