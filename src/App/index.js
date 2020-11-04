import React from 'react';
import jokeData from '../helpers/data/jokeData';

class App extends React.Component {
  state = {
    jokes: [],
  };

  componentDidMount() {
    jokeData.getJokeObject().then((resp) => {
      this.setState({
        jokes: resp,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">I am a button</button>
      </div>
    );
  }
}

export default App;
