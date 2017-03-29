import React from 'react';
import Users from './userId.json'
import {BrowserRouter, Route, Link} from 'react-router-dom';


export default React.createClass({
	render(){
	return(
  <div id="container">
  	<div id="headings">
    	<h1>My Peeps</h1>
    </div>
    <div id="mainSection">
    <ul>
      {Users.map(function(user){
        return <li id="peepsLi"key={'i'+ user.id}><Link to={'/soloPeep/'+ user.id} id="peepLink"><img src={user.picture.thumbnail} id="thumb"alt="#"/>{user.name.first +" "+user.name.last}</Link></li>
      })}
    </ul>
    </div>
  </div>
  )
}
})





