import logo from './logo.svg';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from "./colorHelpers";
import {Route, Router, Switch} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>}/>
      <Route exact path="/palette/:id" render={() => <h1>INDIV LIST GOES HERE</h1>}/>
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])}/>
    // </div>
  );
}

export default App;
