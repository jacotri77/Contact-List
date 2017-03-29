import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Users from './userId.json';
import './index.css';





export default React.createClass({
  getInitialState() {
    return{
      contact: Users.filter(user=>{
        return Number(user.id) === Number(this.props.match.params.id)
      })[0]

    }
  },
  brokeBack(e){
    e.preventDefault()
    this.props.history.goBack()
  },

  render(){
   var FaUser = require('react-icons/lib/fa/user')
   var FaEnvelope = require('react-icons/lib/fa/envelope')
   var FaMobile = require('react-icons/lib/fa/mobile')
   var FaGlobe = require('react-icons/lib/fa/globe')
   var FaArrowLeft = require('react-icons/lib/fa/arrow-left')
    return (
     <div id="bigHead">
        <div className="photo">
        <button id="backers" onClick={this.brokeBack}><FaArrowLeft /></button>
          <img src={this.state.contact.picture.large} alt="#" id="larger"/>
        </div>
        <div id="mainBody">
          <ul>
            <li><FaUser className="iconz"/>{this.state.contact.name.first} {this.state.contact.name.last}</li>
            <li><FaEnvelope className="iconz"/>{this.state.contact.email}</li>
            <li><FaMobile className="iconz"/>{this.state.contact.cell}</li>
            <li><FaGlobe className="iconz"/>{this.state.contact.location.city}, {this.state.contact.location.state}</li>
          </ul>
          </div>
      </div>

)
}
})


