import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import Legacy_code from "./components/Services/legacy_code"
import Custom_software from "./components/Services/custom_software"
import Outsourcing from "./components/Services/outsourcing"
import Mobile from "./components/Services/mobile"
import Main from './components/landing/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main/>
        <Route path="/legacy" component={Legacy_code}/>
        <Route path="/software" component={Custom_software}/>
        <Route path="/outsourcing" component={Outsourcing}/>
        <Route path="/mobile" component={Mobile}/>
      </Router>
    </div>
  );
}

export default App;