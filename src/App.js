import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from "react";
import Homepage from './views/Homepage';
import ProductDetails from './views/ProductDetails';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/homepage" exact component={Homepage} />
        <Route path="/product/:productId" component={ProductDetails} />
        </Switch>
     </Router>
    </div>
  );
}

export default App;
