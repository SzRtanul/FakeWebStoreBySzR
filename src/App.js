//import logo from './logo.svg';
//import './App.css';

import { useContext } from "react";
import { APIContext } from "./contexts/APIContext";
import VasarloTer from "./components/VasarloTer";



function App() {
  const { termeklista } = useContext(APIContext);
  return (
    <div className="App">
      <header className="App-header">
        <h1>FakeStore webáruház</h1>
        <main></main>
        <aside className="col-lg-4">
          <h4>Kosár</h4>
        </aside>
        <article>
          <h4>Vásárlótér</h4>
          { termeklista ? <VasarloTer termeklista={termeklista}/> : "Nincs adat." }
        </article>
       
      </header>
    </div>
  );
}

export default App;
