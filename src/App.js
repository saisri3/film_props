import logo from './logo.svg';
import './App.css';
import './components/FilmDetails/FilmDetails.css';
import Data from "./components/MOCK_DATA"
import { FilmDetails } from "./components/FilmDetails/FilmDetails"


function App() {
  return (
    <div className="App">
      <div className="header">
        <p>IMAGE</p>
        <p>TITLE</p>
        <p>YEAR</p>
        <p>RATING</p>
        <p>DURATION</p>

      </div>

      <div className="films">
        {Data.map(film => {
          return (
            < FilmDetails
            
              film={film}
              
            />)
                })}

      </div>

    </div>
  );
}

export default App;
