import React, { Component } from 'react';
import jokeData from '../../helpers/data/jokeData';
import Joke from '../Punchline';

export default class Setup extends Component {
  state = {
    joke: [],
  };

  getJoke = () => {
    jokeData.getJokeObject().then((resp) => {
      this.setState({
        joke: resp,
      });
    });
  };

  render() {
    const { joke } = this.state;
    const renderJokeToDom = () => <div className="joke-container"><Joke key={joke.id} joke={joke} /></div>;

    return (
      <>
        <button id='giveMeAJoke' className='btn btn-primary btn-lg' onClick={this.getJoke}>
          Get a Joke
        </button>
        {this.state.joke.id ? <div>{renderJokeToDom()}</div> : <></>};
      </>
    );
  }
}
