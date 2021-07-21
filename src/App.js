import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Cart from "./component/screens/Cart";
import Home from "./component/screens/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
