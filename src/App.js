
import './App.css';

import React, { Component } from 'react'
import Stopwatvh from './Stopwatvh';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    showUi : false  
    }
  }
  uihandel=()=>{
    this.setState({
      showUi : !this.state.showUi
    })
  }
  render() {
    console.log(this.state);
    return (
      <div className="parent-container">  
      <h1>🚀 Timers 🚀 </h1>
      
      {/* <Stopwatvh/> */}
      {
        this.state.showUi ?
        (<Stopwatvh data = {this.state} listener={this.uihandel}/>) :
          <button className='button' onClick={this.uihandel} >Show Stopwatch</button>
      }

    </div>
    )
  }
}


export default App;
