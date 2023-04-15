import PropTypes from 'prop-types';

export default function Joker({ joke, bttnText }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <p>{bttnText}</p>
    </>
  );
}

Joker.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }),
  bttnText: PropTypes.string,
};

Joker.defaultProps = {
  joke: {
    setup: 'Default Setup',
    punchline: 'Default Punchline',
  },
  bttnText: 'Get A Joke',
};
