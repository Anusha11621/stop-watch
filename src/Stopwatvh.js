/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class Stopwatvh extends Component {
    constructor(props){
        super(props)
        this.state ={
            start :false,
            resume:false,
            reset:false,
            stop:false,
            timerstart:0,
            timerrun:0, 
            resumetime:0,
        }
        this.interval = null
    }
    starthandel = ()=>{
        this.setState({
            start : true,
            timerstart : Date.now()
        }) 

        this.interval = setInterval(()=>{this.setState({ timerrun:  (Math.floor((Date.now() - this.state.timerstart)))})},10)

    }
    stophandel = ()=>{
        this.setState({
            stop : !this.state.stop,
            timerrun :   (Math.floor((Date.now() - this.state.timerstart))),
            resumetime : this.state.timerrun
            
        })
        clearInterval(this.interval)
    }
    resumehandel = ()=>{
        this.setState({
            resume : !this.state.resume,
            timerstart : Date.now(),
        }) 
        this.interval = setInterval(()=>{this.setState((prevState)=>{
            prevState['timerrun'] =prevState['resumetime'] + Math.floor((Date.now() - this.state.timerstart))

            return prevState
        })},10)

    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }
    resethandel = ()=>{
        clearInterval(this.interval);
        this.setState({
            start: false,
            stop:false,
            reset : !this.state.reset,
            timerrun : 0
        })
    }

    timecalculation = ()=>{
        let milliseconds = (this.state.timerrun)%100 + ""
        let seconds = Math.floor((this.state.timerrun)/1000)%60+ ""
        let mins = Math.floor((this.state.timerrun/1000)/60)+ ""
        let hours = Math.floor(((this.state.timerrun/1000)/60)/60)+ ""

        if(milliseconds.length === 1){
            milliseconds = '0'+milliseconds
        }
        if(seconds.length === 1){
            seconds = '0'+seconds
        }
        if(mins.length === 1){
            mins = '0'+mins
        }
        if(hours.length === 1){
            hours = '0'+hours
        }



        return (hours+":"+mins+":"+seconds+":"+milliseconds)
    }
  render(){
     return (
       
        <div className='cards'>
            <p className='crossbtn' onClick={this.props.listener}>X</p>
            <h4>Stopwatch</h4>
            <br></br>
            <h2>{this.timecalculation()}</h2>
            
            <br></br>
            
            {
                !this.state.start?(<button className='button' onClick={this.starthandel}>Start</button>):!this.state.stop ?<button className='button' onClick={this.stophandel}>Stop</button> : (
                    <div>
                        <button className='button' onClick={this.resumehandel}>Resume</button>
                        <button className='button' onClick={this.resethandel}>Reset</button>
                    </div>    
                )
            }
            
                    
      </div>
    )
  }
}
















