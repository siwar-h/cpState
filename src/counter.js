import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
          timer : 0

        }
      }
      componentDidMount(){
        setInterval(() => {
          this.setState({
            timer : this.state.timer + 1
          });
        }, 1000);        
       }
    
  render() {
    return (
      <div>
         <h2> this component was monted from : {this.state.timer} </h2>
      </div>
    )
  }
}
