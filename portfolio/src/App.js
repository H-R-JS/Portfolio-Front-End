import "./SASS/Header.scss";
import { Header } from "./Components/1Head/Header";
import { BodyRouter, Body } from "./Components/2Body/BodyRouter";

function App() {
  return (
    <div className="App">
      <div className="header-folder">
        <span>
          Dossier n°175-40
          <br />
          Sujet 027 Z18
        </span>
      </div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
