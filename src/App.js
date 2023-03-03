import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import Header from "./components/header";
import aboutMe from "./components/aboutMe";

function App() {
  return (
    <div className="App">
      <header className="text-3xl font-bold underline">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Genevieve Ferrari</p>
        <a
        // className="App-link"
        // href="https://reactjs.org"
        // target="_blank"
        // rel="noopener noreferrer"
        ></a>
      </header>
      <div>
        <aboutMe></aboutMe>
      </div>
    </div>
  );
}

export default App;
