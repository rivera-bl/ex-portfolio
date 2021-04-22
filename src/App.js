import GlobalStyle from "./components/GlobalStyle"
import Header from "./components/Header"
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Header/>
        <Switch>
            <Route path="/" exact>
                <About/>
            </Route>
            <Route path="/work">
                <Work/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
