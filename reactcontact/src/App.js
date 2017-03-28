import React from 'react';
import './index.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'; 
import MyPeeps from './myPeeps.js';
import SoloPeep from './soloPeep.js';


export default React.createClass ({
  render(){
    return(

  <BrowserRouter>
    <div>
      <ul>
      <li><Link to="/">My Peeps</Link></li>
      <li><Link to="/soloPeep">Solo Peep</Link></li>
      </ul>
      <Route exact={true} path="/" component={MyPeeps}/>
      <Route path="/soloPeep/:id" component={SoloPeep}/>
      
    </div>
  </BrowserRouter>

)
}
})
  
