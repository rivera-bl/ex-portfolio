import GlobalStyle from "./components/GlobalStyle"
import Header from "./components/Header"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Header/>
        <About/>
    </div>
  );
}

export default App;
