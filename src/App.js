import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    date: new Date(),
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <p className="App__time">
          Current time:
          {' '}
          {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

export default App;
