import { Home } from "./components/Home";
import { Switch, Route } from "react-router-dom"
import { Songs } from "./components/Songs";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="App">
       <Navbar />
      <Switch>
        <Route  exact path="/">
          <Home />
        </Route>
        <Route path="/albums/:id">
          <Songs />
        </Route>
        <Route>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
