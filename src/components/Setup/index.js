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

  getProgrammingJoke = () => {
    jokeData.getProgrammingJoke().then((resp) => {
      this.setState({
        joke: resp,
      });
    });
  };

  getKnockKnockJoke = () => {
    jokeData.getKnockKnockJoke().then((resp) => {
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
        <button id='giveMeAJoke' className='btn btn-outline-light btn-lg m-2' onClick={this.getJoke}>
          Get a General Joke
        </button>
        <button id='giveMeAProgrammingJoke' className='btn btn-outline-light btn-lg m-2' onClick={this.getProgrammingJoke}>
          Get a Programming Joke
        </button>
        <button id='giveMeAKnockKnockJoke' className='btn btn-outline-light btn-lg m-2' onClick={this.getKnockKnockJoke}>
          Get a Knock Knock Joke
        </button>
        {this.state.joke.id ? <div>{renderJokeToDom()}</div> : <></>}
      </>
    );
  }
}
