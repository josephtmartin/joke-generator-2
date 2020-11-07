import React, { Component } from 'react';

export default class Joke extends Component {
  state = {
    punchline: [],
  };

  getPunchline = () => {
    this.setState({
      punchline: this.props.joke.punchline,
    });
  }

  render() {
    const { joke } = this.props;

    return (
      <div className='card'>
        <div className='card-body'>
          <h2 className='joke-type'>Joke Type: {joke.type}</h2>
          <p className='card-text'>{joke.setup}</p>
          <button
            href='#'
            id='punchline'
            onClick={this.getPunchline}
            className='btn btn-primary'
          >
            Click for Punchline
          </button>
          <div id='punchlineDiv' className='punchlineDiv'>
          <h4 className="m-md">{this.state.punchline}</h4>
          </div>
        </div>
      </div>
    );
  }
}
