import React from 'react';
import Users from './userId.json'
import {Link} from 'react-router-dom';


export default React.createClass({

  capFirst(c) {

  var a = c.split('')

  a[0] = a[0].toUpperCase()

  a.join('')

  return a
},
	render(){
	return(
  <div id="container">
  	<div id="headings">
    	<span>My Peeps</span>
    </div>
    <div id="mainSection">
    <ul>
      {
        Users.map(user=>{
        return <li id="peepsLi"key={'i'+ user.id}><Link to={'/soloPeep/'+ user.id} id="peepLink"><img src={user.picture.thumbnail} id="thumb"alt="#"/>{this.capFirst(user.name.first)} {this.capFirst(user.name.last)}</Link></li>
      })

    }
    </ul>
    </div>
  </div>
  )
}
})







