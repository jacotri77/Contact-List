import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Users from './userId.json'
import './index.css';




export default React.createClass({


  render(){
    return (
     <div id="bigHead">
        <header>
          {Users.map(function(user){
        return <div id="picbox" key={'i'+ user.id}><img src={user.picture.large} alt="#"/></div>
      })}
          
        </header>
      
          <ul>
        {Users.map(function(user){
        return <div key={'i'+ user.id}><li id="texts" >{user.name.first +" "+user.name.last}</li><li>{user.email}</li><li>{user.cell}</li><li>{user.location.city +" , " + user.location.state}</li></div>
         
      })}
         </ul>
       
        
       </div>
         
	
)
}
})


