
import React from 'react'
import './App.css';

class App extends React.Component{
  constructor (props){
    
    super(props);
   this.Timer=Timer
    this.state= {
      hour :0,
      minute:0,
      second:0

    }
  }

  handlestart = () => {

    this.timer = setInterval(()=>{
      this.setState((prevState) =>{
        return{
          second :prevState.second +1
        };
      });

      if(this.state.second /60==1){
        this.setState((prevState)=>{
          return{
            minute : prevState.minute +1,
            second :0
          }
        })
      }
      if(this.state.minute /60===1){
        this.setState((prevState)=>{
          return{
            hour :prevState.hour +1,
            minute :0
          }

        })
      }
    },1000);
    // this.setState((prevState) =>{
    //   return{
    //     hour : prevState.hour + 1,
    //     minute:prevState.minute + 1,
    //     second:prevState.second + 1
    //   }

    
  };

  handlestop = () => {
    clearInterval(this.timer);
    
      }

      handlereset = () => {
        this.setState(()=>{
          return {
            hour :0,
            minute :0,
            second :0
          }
        })
          }
  render(){
    return(
      <div className="container">
        <Header />
        <Timer time={this.state}/>
        <Action handlestart ={this.handlestart} handlestop={this.handlestop}  handlereset={this.handlereset}/>
        </div>
    );
  }

}

const Header = ()=>{
  return <h1 id="stopwatch">stop watch</h1>
}

const Timer = (props)=>{
return (
  <div id="display">
    <div>{props.time.hour}:{props.time.minute}:{props.time.second}</div>
    

  </div>
)
}

const Action = (props) =>{
  return (
    <div className="btn">
      <button onClick={props.handlereset}id="reset">Reset</button>
      <button onClick={props.handlestart}id="startstop">Start</button>
      <button onClick={props.handlestop}id="stop">stop</button>
    </div>
  );
}
export default App;



