
import './App.css';
import React, { Component } from 'react';
import PersonProfil from './PersonProfil'

import Counter from './counter';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Person : 
        {
          fullName: "med",
          bio:"Développeur logiciel passionné par l'apprentissage des nouvelles technologies",
          imgSrc: "https://talks.freelancerepublik.com/wp-content/uploads/2021/03/Comment-developper-efficacement-son-activite.jpg",
          profession:"Développeur logiciel"
        },
      
      show:true
    };
  }
  handleShow = () => {
    this.setState({
      show : !this.state.show
    })
  }
  render() {
    const {Person,show}=this.state;
    return(
      <div>
         <button onClick={this.handleShow}> 
          { show ? 'Hide profile':'show profile'}
          </button>
          {show &&(
            <div>
              <PersonProfil person={Person}/>
              <Counter/>


            </div>
          )}
  
      </div>
    )
  }
}

