

import "./App.css"
import ChipsArray from "./chips";



function App() {
  return (
    <div className="root">
      <header className="App-header">
        <a
          className="App-link"
          href="http://voscak.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          voscak.de
        </a>

        <ChipsArray></ChipsArray>       
      </header>
   
    </div>



  );
}

export default App;
