# Joke Generator 2.0
This is a Joke Generator App. It gets a random joke from an API and displays it for the user

## Motivation
This was built after learning React components and props. This was a challenge from our instructor to build another Joke Generator using the same API but with React!

## Deploy Link
[React Joke Generator](https://reactjokegenerator.netlify.app/)

## Build Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/4c9e500e-094e-4c99-8cc4-3b28e4643c19/deploy-status)](https://app.netlify.com/sites/reactjokegenerator/deploys)

## Demo
![Demo Gif](demo/joke-generator-2.0.gif)

## Code Snippet
```
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
```

