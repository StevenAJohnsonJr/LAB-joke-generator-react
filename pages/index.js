import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
import Joker from '../components/JokeGenerator';

function Home() {
  const [btnText, setBtnText] = useState('Get A Joke');
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((jokeObject) => {
      setJoke({
        setup: jokeObject.setup,
        punchline: jokeObject.delivery,
      });
    });
  };

  return (
    <>
      <h1>{joke.setup}</h1>
      <h2>{joke.punchline}</h2>
      <button type="button" onClick={getAJoke}>
        {btnText}
      </button>
      <Joker joke={joke} btnText={btnText} />: (
      <Button type="button" onClick={() => setButton('Get A New Joke')}>
        {btnText}
      </Button>
      )
    </>
  );
}
export default Home;
