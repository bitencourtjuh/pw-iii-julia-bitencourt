import "./App.css";
import Aritmetica from "./components/Aritmetica";
import Logicos from "./components/Logicos";
import Condicao from "./components/Condicao";
import Decisao from "./components/Decisao";
import Repeticao from "./components/Repeticao";

function App() {
  return (
    <div className="app">
      <h1> Estruturas em React</h1>

      <div className="container-cards">
        <div className="card"><Aritmetica /></div>
        <div className="card"><Logicos /></div>
        <div className="card"><Condicao /></div>
        <div className="card"><Decisao /></div>
        <div className="card"><Repeticao /></div>
      </div>
    </div>
  );
}

export default App;