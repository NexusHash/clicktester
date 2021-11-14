import './App.css';
import React, { Component } from 'react';


//EventListeners

//Disable Left and Middle click default functions
window.addEventListener("contextmenu", e => e.preventDefault());
window.addEventListener("auxclick", e => e.preventDefault());

class CounterLClick extends Component {

  state = {
    lCount: 0
  }

    handleLClick = () => {
      this.setState((prevState, { lCount }) => ({
        lCount: prevState.lCount+1
      }));
    }

    render() {
      
      return (
      <div className="div-buttoncounter">
          <div>
          <button onClick={this.handleLClick}>Click me!</button>
          <h2> Left-Clicks : {this.state.lCount}</h2>
          </div>
      </div>
      )
    }
}

class CounterRClick extends Component {

  state = {
    rCount: 0
  }

    handleRClick = (event) => {
      this.setState((prevState, { rCount }) => ({
        rCount: prevState.rCount+1
      }));
    }

    render() {
      
      return (
      <div className="div-buttoncounter">
          <div>
          <button onContextMenu={this.handleRClick}>Click me!</button>
          <h2> Right-Clicks : {this.state.rCount}</h2>
          </div>
      </div>
      )
    }
}

class CounterMClick extends Component {

  state = {
    mCount: 0
  }

    handleMClick = (e) => {
      this.setState((prevState, { mCount }) => ({
        mCount: prevState.mCount+1
      }));
    }

    render() {
      
      return (
      <div className="div-buttoncounter">
          <div>
          <button onAuxClick={this.handleMClick}>Click me!</button>
          <h2> Middle-Clicks : {this.state.mCount}</h2>
          </div>
      </div>
      )
    }
}



function App() {
  return (
    <div className="App">
      <header>
        <h1 className="header-text">Mouse Test</h1>
        <p className="h1-subtext">Make sure your mouse doesn't double click!</p>
      </header>

      <div className="div-block">
        <CounterLClick />
        <CounterMClick />
        <CounterRClick />
      </div>
    </div>
  );
}


export default App;