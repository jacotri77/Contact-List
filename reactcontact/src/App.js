import React from 'react';
import './css/index.css';
import {BrowserRouter, Route} from 'react-router-dom'; 
import MyPeeps from './myPeeps.js';
import SoloPeep from './soloPeep.js';


export default React.createClass ({
  render(){
    return(

  <BrowserRouter>
    <div>
      <Route exact={true} path="/" component={MyPeeps}/>
      <Route path="/soloPeep/:id" component={SoloPeep}/> 
    </div>
  </BrowserRouter>

)
}
})
  
