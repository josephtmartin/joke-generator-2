import axios from 'axios';

const getJokeObject = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getProgrammingJoke = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/jokes/programming/random').then((resp) => {
    resolve(resp.data[0]);
  }).catch((error) => reject(error));
});

const getKnockKnockJoke = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/jokes/knock-knock/random').then((resp) => {
    resolve(resp.data[0]);
  }).catch((error) => reject(error));
});

export default { getJokeObject, getProgrammingJoke, getKnockKnockJoke };
